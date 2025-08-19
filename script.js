// Paires de mots prédéfinies (Citoyens + Mr White seulement)
const wordPairs = [
    { citoyen: "Chat", mrWhite: "Félin" },
    { citoyen: "Pizza", mrWhite: "Calzone" },
    { citoyen: "Plage", mrWhite: "Sable" },
    { citoyen: "École", mrWhite: "Cours" },
    { citoyen: "Château", mrWhite: "Manoir" },
    { citoyen: "Avion", mrWhite: "Aéroport" },
    { citoyen: "Forêt", mrWhite: "Arbres" },
    { citoyen: "Neige", mrWhite: "Froid" },
    { citoyen: "Océan", mrWhite: "Mer" },
    { citoyen: "Livre", mrWhite: "Roman" },
    { citoyen: "Montagne", mrWhite: "Sommet" },
    { citoyen: "Café", mrWhite: "Expresso" },
    { citoyen: "Voiture", mrWhite: "Automobile" },
    { citoyen: "Guitare", mrWhite: "Instrument" },
    { citoyen: "Fleur", mrWhite: "Rose" },
    { citoyen: "Maison", mrWhite: "Demeure" },
    { citoyen: "Chien", mrWhite: "Canin" },
    { citoyen: "Eau", mrWhite: "Liquide" },
    { citoyen: "Soleil", mrWhite: "Astre" },
    { citoyen: "Pain", mrWhite: "Baguette" }
];

// État du jeu
let gameState = {
    playerCount: 0,
    players: [],
    currentPlayerIndex: 0,
    currentRoleIndex: 0,
    roles: [],
    selectedPair: null,
    currentDescriptionIndex: 0,
    votes: {},
    eliminatedPlayers: [],
    gamePhase: 'config' // config, players, roles, descriptions, voting, guess, end
};

/**
 * Démarre l'inscription des joueurs
 */
function startPlayerRegistration() {
    const playerCount = parseInt(document.getElementById('playerCount').value);
    
    if (playerCount < 3) {
        alert('Il faut au moins 3 joueurs pour jouer !');
        return;
    }
    
    if (playerCount > 15) {
        alert('Maximum 15 joueurs !');
        return;
    }
    
    gameState.playerCount = playerCount;
    gameState.players = [];
    gameState.currentPlayerIndex = 0;
    
    switchPhase('phase-players');
    updatePlayerPrompt();
}

/**
 * Met à jour le texte d'invitation pour le joueur actuel
 */
function updatePlayerPrompt() {
    const prompt = document.getElementById('currentPlayerPrompt');
    const remaining = gameState.playerCount - gameState.players.length;
    prompt.textContent = `Joueur ${gameState.players.length + 1} : Entrez votre nom (${remaining} restant${remaining > 1 ? 's' : ''})`;
}

/**
 * Ajoute un joueur à la liste
 */
function addPlayer() {
    const nameInput = document.getElementById('playerNameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Veuillez entrer un nom !');
        return;
    }
    
    if (name.length > 20) {
        alert('Le nom est trop long (20 caractères maximum) !');
        return;
    }
    
    if (gameState.players.some(p => p.name.toLowerCase() === name.toLowerCase())) {
        alert('Ce nom est déjà pris !');
        return;
    }
    
    gameState.players.push({ 
        name: name, 
        role: null, 
        word: null 
    });
    
    nameInput.value = '';
    
    updatePlayersList();
    updatePlayerPrompt();
    
    if (gameState.players.length === gameState.playerCount) {
        finishPlayerRegistration();
    }
}

/**
 * Termine l'inscription des joueurs
 */
function finishPlayerRegistration() {
    document.getElementById('continueToRoles').style.display = 'inline-block';
    document.getElementById('currentPlayerPrompt').textContent = 'Tous les joueurs sont inscrits !';
    document.getElementById('playerNameInput').style.display = 'none';
    document.querySelector('#phase-players .btn').style.display = 'none';
}

/**
 * Met à jour l'affichage de la liste des joueurs
 */
function updatePlayersList() {
    const list = document.getElementById('playersList');
    list.innerHTML = '';
    
    gameState.players.forEach((player, index) => {
        const item = document.createElement('div');
        item.className = 'player-item';
        item.innerHTML = `<span>${index + 1}. ${player.name}</span>`;
        list.appendChild(item);
    });
}

/**
 * Assigne les rôles et mots aux joueurs
 */
function assignRoles() {
    // Sélectionner une paire de mots aléatoire
    gameState.selectedPair = wordPairs[Math.floor(Math.random() * wordPairs.length)];
    
    // Créer la liste des rôles
    const roles = [];
    
    // 1 Imposteur
    roles.push('imposteur');
    
    // 1 Mr White
    roles.push('mrWhite');
    
    // Le reste sont des citoyens
    for (let i = 2; i < gameState.playerCount; i++) {
        roles.push('citoyen');
    }
    
    // Mélanger les rôles avec l'algorithme Fisher-Yates
    shuffleArray(roles);
    
    // Assigner les rôles et mots
    gameState.players.forEach((player, index) => {
        player.role = roles[index];
        
        // Attribution des mots selon le rôle
        if (player.role === 'citoyen') {
            player.word = gameState.selectedPair.citoyen;
        } else if (player.role === 'mrWhite') {
            player.word = gameState.selectedPair.mrWhite;
        } else if (player.role === 'imposteur') {
            player.word = null; // L'imposteur n'a pas de mot !
        }
    });
    
    gameState.currentRoleIndex = 0;
    
    switchPhase('phase-roles');
    updateCurrentRolePlayer();
}

/**
 * Mélange un tableau (algorithme Fisher-Yates)
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Met à jour l'affichage du joueur actuel pour la révélation des rôles
 */
function updateCurrentRolePlayer() {
    const current = gameState.players[gameState.currentRoleIndex];
    document.getElementById('currentRolePlayer').textContent = `Au tour de : ${current.name}`;
    document.getElementById('revealRoleBtn').style.display = 'inline-block';
    document.getElementById('roleReveal').style.display = 'none';
}

/**
 * Révèle le rôle et le mot du joueur actuel
 */
function revealRole() {
    const current = gameState.players[gameState.currentRoleIndex];
    
    document.getElementById('revealRoleBtn').style.display = 'none';
    document.getElementById('roleReveal').style.display = 'block';
    
    const roleElement = document.getElementById('playerRole');
    const wordElement = document.getElementById('playerWord');
    const instructionsElement = document.getElementById('roleInstructions');
    
    let roleName, roleClass, instructions;
    
    // Réinitialiser le style du mot
    wordElement.style.background = '#667eea';
    
    switch(current.role) {
        case 'citoyen':
            roleName = '👥 Citoyen';
            roleClass = 'role-citoyen';
            instructions = 'Vous êtes un citoyen. Votre objectif est de démasquer l\'imposteur et Mr White sans révéler votre mot exact.';
            wordElement.textContent = current.word;
            break;
        case 'imposteur':
            roleName = '🎭 Imposteur';
            roleClass = 'role-imposteur';
            instructions = 'Vous êtes l\'imposteur ! Vous n\'avez pas de mot. Écoutez bien les descriptions des autres pour deviner le mot des citoyens.';
            wordElement.textContent = "AUCUN MOT";
            wordElement.style.background = '#dc3545';
            break;
        case 'mrWhite':
            roleName = '🤵 Mr White';
            roleClass = 'role-mrwhite';
            instructions = 'Vous êtes Mr White ! Votre mot est proche de celui des citoyens. Restez discret et essayez de deviner leur mot exact.';
            wordElement.textContent = current.word;
            break;
        default:
            roleName = 'Erreur';
            roleClass = '';
            instructions = 'Une erreur s\'est produite.';
            wordElement.textContent = 'ERREUR';
    }
    
    roleElement.textContent = roleName;
    roleElement.className = `role-badge ${roleClass}`;
    instructionsElement.textContent = instructions;
}

/**
 * Passe au joueur suivant pour la révélation des rôles
 */
function nextPlayerRole() {
    gameState.currentRoleIndex++;
    
    if (gameState.currentRoleIndex >= gameState.players.length) {
        // Tous les rôles ont été révélés
        document.getElementById('roleReveal').style.display = 'none';
        document.getElementById('currentRolePlayer').style.display = 'none';
        document.getElementById('allRolesRevealed').style.display = 'block';
    } else {
        updateCurrentRolePlayer();
    }
}

/**
 * Démarre la partie
 */
function startGame() {
    gameState.gamePhase = 'game';
    switchPhase('phase-game');
}

/**
 * Redémarre une nouvelle partie
 */
function restartGame() {
    // Réinitialiser l'état du jeu
    gameState = {
        playerCount: 0,
        players: [],
        currentPlayerIndex: 0,
        currentRoleIndex: 0,
        roles: [],
        selectedPair: null,
        currentDescriptionIndex: 0,
        votes: {},
        eliminatedPlayers: [],
        gamePhase: 'config'
    };
    
    // Réinitialiser les éléments du DOM
    resetDOM();
    
    // Retourner à la phase de configuration
    switchPhase('phase-config');
}

/**
 * Réinitialise les éléments du DOM
 */
function resetDOM() {
    // Reset form values
    document.getElementById('playerCount').value = 6;
    document.getElementById('playerNameInput').value = '';
    document.getElementById('playerNameInput').style.display = 'block';
    document.querySelector('#phase-players .btn').style.display = 'inline-block';
    document.getElementById('continueToRoles').style.display = 'none';
    document.getElementById('playersList').innerHTML = '';
    document.getElementById('allRolesRevealed').style.display = 'none';
    document.getElementById('currentRolePlayer').style.display = 'block';
}

/**
 * Change la phase active du jeu
 */
function switchPhase(phaseId) {
    document.querySelectorAll('.phase').forEach(phase => {
        phase.classList.remove('active');
    });
    
    const targetPhase = document.getElementById(phaseId);
    if (targetPhase) {
        targetPhase.classList.add('active');
    }
}

/**
 * Gestion des événements
 */
document.addEventListener('DOMContentLoaded', function() {
    // Event listener pour Enter sur l'input du nom
    const playerNameInput = document.getElementById('playerNameInput');
    if (playerNameInput) {
        playerNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });
        
        // Focus automatique sur l'input du nom
        playerNameInput.focus();
    }
    
    // Event listener pour Enter sur l'input de devinette
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const guessInput = document.getElementById('guessInput');
            if (guessInput && guessInput.style.display !== 'none' && document.activeElement === guessInput) {
                submitGuess();
            }
        }
    });
});

/**
 * Utilitaires pour le debug (optionnel)
 */
function debugGameState() {
    console.log('État actuel du jeu:', gameState);
}

function debugPlayers() {
    console.log('Joueurs et leurs rôles:');
    gameState.players.forEach((player, index) => {
        console.log(`${index + 1}. ${player.name} - ${player.role} - ${player.word}`);
    });
}

/**
 * Démarre l'élimination
 */
function startElimination() {
    gameState.gamePhase = 'elimination';
    switchPhase('phase-elimination');
    displayEliminationPlayers();
}

/**
 * Affiche les joueurs disponibles pour l'élimination
 */
function displayEliminationPlayers() {
    const eliminationContainer = document.getElementById('eliminationPlayers');
    eliminationContainer.innerHTML = '';
    
    const alivePlayers = gameState.players.filter(p => !gameState.eliminatedPlayers.includes(p.name));
    
    alivePlayers.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.className = 'voting-player';
        playerDiv.innerHTML = `<div>${player.name}</div>`;
        
        playerDiv.onclick = () => eliminatePlayer(player.name);
        eliminationContainer.appendChild(playerDiv);
    });
}

/**
 * Élimine un joueur
 */
function eliminatePlayer(playerName) {
    // Éliminer le joueur
    gameState.eliminatedPlayers.push(playerName);
    const player = gameState.players.find(p => p.name === playerName);
    
    // Afficher le résultat
    document.getElementById('eliminatedPlayerResult').textContent = `${playerName} a été éliminé !`;
    
    // Révéler le rôle
    const roleRevealSection = document.getElementById('roleRevealResult');
    let roleClass, roleName;
    
    switch(player.role) {
        case 'citoyen':
            roleName = '👥 Citoyen';
            roleClass = 'role-citoyen';
            break;
        case 'imposteur':
            roleName = '🎭 Imposteur';
            roleClass = 'role-imposteur';
            break;
        case 'mrWhite':
            roleName = '🤵 Mr White';
            roleClass = 'role-mrwhite';
            break;
    }
    
    roleRevealSection.innerHTML = `
        <div class="role-badge ${roleClass}">${roleName}</div>
        <p style="margin-top: 0.5rem;">${player.word || 'Aucun mot'}</p>
    `;
    
    switchPhase('phase-result');
}

/**
 * Continue le jeu après une élimination
 */
function continueGame() {
    const eliminatedPlayer = gameState.eliminatedPlayers[gameState.eliminatedPlayers.length - 1];
    const player = gameState.players.find(p => p.name === eliminatedPlayer);
    
    // Vérifier si c'est un imposteur ou Mr White éliminé
    if (player.role === 'imposteur' || player.role === 'mrWhite') {
        // Il peut tenter de deviner
        gameState.gamePhase = 'guess';
        switchPhase('phase-guess');
        document.getElementById('guessingPlayer').textContent = eliminatedPlayer;
        document.getElementById('guessingPlayerName').textContent = eliminatedPlayer;
    } else {
        // C'était un citoyen, vérifier les conditions de victoire
        checkWinConditions();
    }
}

/**
 * Affiche l'interface de devinette
 */
function showGuessInput() {
    document.getElementById('guessSection').style.display = 'block';
    document.querySelector('#phase-guess .btn').style.display = 'none';
    document.getElementById('guessInput').focus();
}

/**
 * Soumet la tentative de devinette
 */
function submitGuess() {
    const guess = document.getElementById('guessInput').value.trim().toLowerCase();
    const correctWord = gameState.selectedPair.citoyen.toLowerCase();
    
    if (!guess) {
        alert('Veuillez entrer un mot !');
        return;
    }
    
    // Vérifier si la réponse est correcte
    if (guess === correctWord) {
        // L'imposteur/Mr White gagne !
        endGame('imposters', `Bravo ! "${gameState.selectedPair.citoyen}" était la bonne réponse !`);
    } else {
        // Les citoyens gagnent
        endGame('citizens', `Mauvaise réponse ! Le mot était "${gameState.selectedPair.citoyen}".`);
    }
}

/**
 * Vérifie les conditions de victoire
 */
function checkWinConditions() {
    const alivePlayers = gameState.players.filter(p => !gameState.eliminatedPlayers.includes(p.name));
    const aliveImposters = alivePlayers.filter(p => p.role === 'imposteur' || p.role === 'mrWhite');
    
    if (aliveImposters.length === 0) {
        // Tous les imposteurs sont éliminés, les citoyens gagnent
        endGame('citizens', 'Tous les imposteurs ont été éliminés !');
    } else {
        // Le jeu continue avec un nouveau tour
        gameState.gamePhase = 'game';
        switchPhase('phase-game');
    }
}

/**
 * Termine le jeu
 */
function endGame(winner, message) {
    gameState.gamePhase = 'end';
    switchPhase('phase-end');
    
    const gameResult = document.getElementById('gameResult');
    const gameEndTitle = document.getElementById('gameEndTitle');
    
    if (winner === 'citizens') {
        gameResult.className = 'game-result victory-citizens';
        gameResult.textContent = `🎉 Victoire des Citoyens ! ${message}`;
        gameEndTitle.textContent = '👥 Victoire des Citoyens !';
    } else {
        gameResult.className = 'game-result victory-imposters';
        gameResult.textContent = `🎭 Victoire des Imposteurs ! ${message}`;
        gameEndTitle.textContent = '🎭 Victoire des Imposteurs !';
    }
    
    // Afficher tous les rôles
    displayAllRoles();
}

/**
 * Affiche tous les rôles à la fin
 */
function displayAllRoles() {
    const container = document.getElementById('allPlayersRoles');
    container.innerHTML = '';
    
    gameState.players.forEach(player => {
        const roleDiv = document.createElement('div');
        roleDiv.className = 'final-role-item';
        
        let roleClass, roleName;
        switch(player.role) {
            case 'citoyen':
                roleName = '👥 Citoyen';
                roleClass = 'role-citoyen';
                break;
            case 'imposteur':
                roleName = '🎭 Imposteur';
                roleClass = 'role-imposteur';
                break;
            case 'mrWhite':
                roleName = '🤵 Mr White';
                roleClass = 'role-mrwhite';
                break;
        }
        
        const isEliminated = gameState.eliminatedPlayers.includes(player.name);
        
        roleDiv.innerHTML = `
            <span>${player.name} ${isEliminated ? '(éliminé)' : ''}</span>
            <div>
                <span class="role-badge ${roleClass}">${roleName}</span>
                <span style="margin-left: 0.5rem; font-style: italic;">${player.word || 'Aucun mot'}</span>
            </div>
        `;
        
        container.appendChild(roleDiv);
    });
}