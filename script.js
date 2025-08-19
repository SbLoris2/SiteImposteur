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
    { citoyen: "Pain", mrWhite: "Baguette" },
    { citoyen: "Lune", mrWhite: "Satellite" },
    { citoyen: "Arbre", mrWhite: "Tronc" },
    { citoyen: "Tigre", mrWhite: "Fauve" },
    { citoyen: "Nez", mrWhite: "Odeur" },
    { citoyen: "Crayon", mrWhite: "Stylo" },
    { citoyen: "Téléphone", mrWhite: "Portable" },
    { citoyen: "Lit", mrWhite: "Matelas" },
    { citoyen: "Ville", mrWhite: "Cité" },
    { citoyen: "Bateau", mrWhite: "Navire" },
    { citoyen: "Vélo", mrWhite: "Bicyclette" },
    { citoyen: "Oiseau", mrWhite: "Plumes" },
    { citoyen: "Bureau", mrWhite: "Table" },
    { citoyen: "Ordi", mrWhite: "Clavier" },
    { citoyen: "Horloge", mrWhite: "Heure" },
    { citoyen: "Chocolat", mrWhite: "Cacao" },
    { citoyen: "Banane", mrWhite: "Fruit" },
    { citoyen: "Docteur", mrWhite: "Médecin" },
    { citoyen: "Abeille", mrWhite: "Miel" },
    { citoyen: "Poisson", mrWhite: "Nageoire" },
    { citoyen: "Poulet", mrWhite: "Volaille" },
    { citoyen: "Bouteille", mrWhite: "Verre" },
    { citoyen: "Feuille", mrWhite: "Papier" },
    { citoyen: "Feu", mrWhite: "Flamme" },
    { citoyen: "Nez", mrWhite: "Olfactif" },
    { citoyen: "Glace", mrWhite: "Froid" },
    { citoyen: "Sel", mrWhite: "Sodium" },
    { citoyen: "Clé", mrWhite: "Serrure" },
    { citoyen: "Télé", mrWhite: "Écran" },
    { citoyen: "Gramme", mrWhite: "Poids" },
    { citoyen: "Vent", mrWhite: "Souffle" },
    { citoyen: "Lait", mrWhite: "Vache" },
    { citoyen: "Miel", mrWhite: "Abeille" },
    { citoyen: "Ciel", mrWhite: "Nuage" },
    { citoyen: "Rivière", mrWhite: "Fleuve" },
    { citoyen: "Lac", mrWhite: "Eau" },
    { citoyen: "Boule", mrWhite: "Sphère" },
    { citoyen: "Ballon", mrWhite: "Gonflé" },
    { citoyen: "Train", mrWhite: "Wagon" },
    { citoyen: "Avocat", mrWhite: "Loi" },
    { citoyen: "Jardin", mrWhite: "Plantes" },
    { citoyen: "Roue", mrWhite: "Cercle" },
    { citoyen: "Souris", mrWhite: "Rongeur" },
    { citoyen: "Soleil", mrWhite: "Lumière" },
    { citoyen: "Camion", mrWhite: "Poids-lourd" },
    { citoyen: "Fenêtre", mrWhite: "Vitre" },
    { citoyen: "Nuage", mrWhite: "Ciel" },
    { citoyen: "Couleur", mrWhite: "Teinte" },
    { citoyen: "Chambre", mrWhite: "Pièce" },
    { citoyen: "Route", mrWhite: "Asphalte" },
    { citoyen: "Neige", mrWhite: "Hiver" },
    { citoyen: "Tempête", mrWhite: "Orage" },
    { citoyen: "Vague", mrWhite: "Houle" },
    { citoyen: "Papier", mrWhite: "Feuille" },
    { citoyen: "Journal", mrWhite: "Actualités" },
    { citoyen: "Radio", mrWhite: "Audio" },
    { citoyen: "Musique", mrWhite: "Son" },
    { citoyen: "Lumière", mrWhite: "Ampoule" },
    { citoyen: "Clé", mrWhite: "Code" },
    { citoyen: "Parfum", mrWhite: "Odeur" },
    { citoyen: "Balle", mrWhite: "Projectile" },
    { citoyen: "Carte", mrWhite: "Plan" },
    { citoyen: "Boîte", mrWhite: "Contenant" },
    { citoyen: "Rêve", mrWhite: "Sommeil" },
    { citoyen: "Truc", mrWhite: "Objet" },
    { citoyen: "Animal", mrWhite: "Bête" },
    { citoyen: "Fruit", mrWhite: "Nourriture" },
    { citoyen: "Légume", mrWhite: "Végétal" },
    { citoyen: "Champ", mrWhite: "Terre" },
    { citoyen: "Sable", mrWhite: "Grain" },
    { citoyen: "Gâteau", mrWhite: "Dessert" },
    { citoyen: "Vin", mrWhite: "Alcool" },
    { citoyen: "Bière", mrWhite: "Pression" },
    { citoyen: "Chaleur", mrWhite: "Température" },
    { citoyen: "Bruit", mrWhite: "Son" },
    { citoyen: "Feuille", mrWhite: "Arbre" },
    { citoyen: "Oreille", mrWhite: "Écoute" },
    { citoyen: "Nez", mrWhite: "Odeur" },
    { citoyen: "Main", mrWhite: "Doigt" },
    { citoyen: "Pied", mrWhite: "Chaussure" },
    { citoyen: "Lunettes", mrWhite: "Vue" },
    { citoyen: "Cheval", mrWhite: "Animal" },
    { citoyen: "Zèbre", mrWhite: "Rayures" },
    { citoyen: "Girafe", mrWhite: "Cou" },
    { citoyen: "Loup", mrWhite: "Prédateur" },
    { citoyen: "Renard", mrWhite: "Rusé" },
    { citoyen: "Grenouille", mrWhite: "Batracien" },
    { citoyen: "Tortue", mrWhite: "Carapace" },
    { citoyen: "Serpent", mrWhite: "Reptile" },
    { citoyen: "Poule", mrWhite: "Oeuf" },
    { citoyen: "Mouton", mrWhite: "Laine" },
    { citoyen: "Cochon", mrWhite: "Porc" },
    { citoyen: "Loup", mrWhite: "Canidé" },
    { citoyen: "Vache", mrWhite: "Lait" },
    { citoyen: "Boulangerie", mrWhite: "Pain" },
    { citoyen: "Clé", mrWhite: "Serrure" },
    { citoyen: "Pont", mrWhite: "Passerelle" },
    { citoyen: "Tour", mrWhite: "Gratte-ciel" },
    { citoyen: "Route", mrWhite: "Autoroute" },
    { citoyen: "Ville", mrWhite: "Métropole" },
    { citoyen: "Chocolat", mrWhite: "Sucré" },
    { citoyen: "Montagne", mrWhite: "Alpes" },
    { citoyen: "Neige", mrWhite: "Flocon" },
    { citoyen: "Rivière", mrWhite: "Cours d'eau" },
    { citoyen: "Poisson", mrWhite: "Nageoire" },
    { citoyen: "Cerise", mrWhite: "Fruit" },
    { citoyen: "Orage", mrWhite: "Éclair" },
    { citoyen: "Vent", mrWhite: "Bise" },
    { citoyen: "Lune", mrWhite: "Claire de lune" },
    { citoyen: "Étoile", mrWhite: "Constellation" },
    { citoyen: "Papillon", mrWhite: "Insecte" },
    { citoyen: "Chien", mrWhite: "Canidé" },
    { citoyen: "Chat", mrWhite: "Félin" },
    { citoyen: "Fleur", mrWhite: "Pétale" },
    { citoyen: "Arbre", mrWhite: "Feuille" },
    { citoyen: "Bateau", mrWhite: "Voilier" },
    { citoyen: "Voiture", mrWhite: "Cabriolet" },
    { citoyen: "Avion", mrWhite: "Aéronef" },
    { citoyen: "Train", mrWhite: "Locomotive" },
    { citoyen: "Maison", mrWhite: "Habitation" },
    { citoyen: "Livre", mrWhite: "Manuel" },
    { citoyen: "Téléphone", mrWhite: "Smartphone" },
    { citoyen: "Ordinateur", mrWhite: "Portable" },
    { citoyen: "Clavier", mrWhite: "Souris" },
    { citoyen: "Bureau", mrWhite: "Table" },
    { citoyen: "Chaise", mrWhite: "Fauteuil" },
    { citoyen: "Fenêtre", mrWhite: "Vitre" },
    { citoyen: "Porte", mrWhite: "Entrée" },
    { citoyen: "Miroir", mrWhite: "Reflet" },
    { citoyen: "Montre", mrWhite: "Horloge" },
    { citoyen: "Lampe", mrWhite: "Lumière" },
    { citoyen: "Tasse", mrWhite: "Verre" },
    { citoyen: "Assiette", mrWhite: "Plat" },
    { citoyen: "Fourchette", mrWhite: "Couteau" },
    { citoyen: "Cuillère", mrWhite: "Couverts" },
    { citoyen: "Chaussure", mrWhite: "Botte" },
    { citoyen: "Chapeau", mrWhite: "Casquette" },
    { citoyen: "Vêtement", mrWhite: "Tenue" },
    { citoyen: "Montagne", mrWhite: "Colline" },
    { citoyen: "Plage", mrWhite: "Côte" },
    { citoyen: "Mer", mrWhite: "Océan" },
    { citoyen: "Lac", mrWhite: "Étang" },
    { citoyen: "Forêt", mrWhite: "Bois" },
    { citoyen: "Désert", mrWhite: "Sahara" },
    { citoyen: "Île", mrWhite: "Archipel" },
    { citoyen: "Ciel", mrWhite: "Atmosphère" },
    { citoyen: "Nuage", mrWhite: "Brume" },
    { citoyen: "Pluie", mrWhite: "Orage" },
    { citoyen: "Neige", mrWhite: "Givre" },
    { citoyen: "Vent", mrWhite: "Bourrasque" },
    { citoyen: "Feu", mrWhite: "Flamme" },
    { citoyen: "Glace", mrWhite: "Verglas" },
    { citoyen: "Rivière", mrWhite: "Torrent" },
    { citoyen: "Cheval", mrWhite: "Équidé" },
    { citoyen: "Mouton", mrWhite: "Agneau" },
    { citoyen: "Cochon", mrWhite: "Porc" },
    { citoyen: "Vache", mrWhite: "Taureau" },
    { citoyen: "Poulet", mrWhite: "Volaille" },
    { citoyen: "Oiseau", mrWhite: "Vol" },
    { citoyen: "Papillon", mrWhite: "Chrysalide" },
    { citoyen: "Fourmi", mrWhite: "Insecte" },
    { citoyen: "Abeille", mrWhite: "Essaim" },
    { citoyen: "Loup", mrWhite: "Meute" },
    { citoyen: "Renard", mrWhite: "Rusé" },
    { citoyen: "Tigre", mrWhite: "Félin" },
    { citoyen: "Lion", mrWhite: "Roi" },
    { citoyen: "Éléphant", mrWhite: "Trompe" },
    { citoyen: "Dauphin", mrWhite: "Mammifère" },
    { citoyen: "Requin", mrWhite: "Prédateur" },
    { citoyen: "Baleine", mrWhite: "Cétacé" },
    { citoyen: "Poisson", mrWhite: "Nageoire" },
    { citoyen: "Serpent", mrWhite: "Reptile" },
    { citoyen: "Grenouille", mrWhite: "Amphibien" },
    { citoyen: "Tortue", mrWhite: "Carapace" },
    { citoyen: "Araignée", mrWhite: "Toile" },
    { citoyen: "Scorpion", mrWhite: "Pince" },
    { citoyen: "Chat", mrWhite: "Minou" },
    { citoyen: "Chien", mrWhite: "Toutou" },
    { citoyen: "Souris", mrWhite: "Rongeur" },
    { citoyen: "Rat", mrWhite: "Nuisible" },
    { citoyen: "Cheval", mrWhite: "Poney" },
    { citoyen: "Âne", mrWhite: "Bourricot" },
    { citoyen: "Vache", mrWhite: "Lait" },
    { citoyen: "Cochon", mrWhite: "Goret" },
    { citoyen: "Poule", mrWhite: "Poussin" },
    { citoyen: "Canard", mrWhite: "Caneton" },
    { citoyen: "Oie", mrWhite: "Bernache" },
    { citoyen: "Paon", mrWhite: "Plumes" },
    { citoyen: "Perroquet", mrWhite: "Bec" },
    { citoyen: "Aigle", mrWhite: "Rapace" },
    { citoyen: "Hibou", mrWhite: "Chouette" },
    { citoyen: "Corbeau", mrWhite: "Volatile" },
    { citoyen: "Cigogne", mrWhite: "Bec" },
    { citoyen: "Flamant", mrWhite: "Rose" },
    { citoyen: "Pingouin", mrWhite: "Glace" },
    { citoyen: "Autruche", mrWhite: "Plumes" },
    { citoyen: "Écureuil", mrWhite: "Noisette" },
    { citoyen: "Castor", mrWhite: "Barrage" },
    { citoyen: "Loutre", mrWhite: "Rivière" },
    { citoyen: "Bison", mrWhite: "Buffalo" },
    { citoyen: "Girafe", mrWhite: "Long cou" },
    { citoyen: "Zèbre", mrWhite: "Rayures" },
    { citoyen: "Chameau", mrWhite: "Désert" },
    { citoyen: "Dromadaire", mrWhite: "Bosses" },
    { citoyen: "Kangourou", mrWhite: "Marsupial" },
    { citoyen: "Koala", mrWhite: "Eucalyptus" },
    { citoyen: "Panda", mrWhite: "Bambou" },
    { citoyen: "Tigre", mrWhite: "Rayures" },
    { citoyen: "Lion", mrWhite: "Crinière" },
    { citoyen: "Ours", mrWhite: "Grizzli" },
    { citoyen: "Renard", mrWhite: "Fourrure" },
    { citoyen: "Loup", mrWhite: "Chasse" },
    { citoyen: "Singe", mrWhite: "Primate" },
    { citoyen: "Chimpanzé", mrWhite: "Intelligent" },
    { citoyen: "Gorille", mrWhite: "Forêt" },
    { citoyen: "Orang-outan", mrWhite: "Jungle" },
    { citoyen: "Éléphant", mrWhite: "Trompe" },
    { citoyen: "Rhinocéros", mrWhite: "Corne" },
    { citoyen: "Hippopotame", mrWhite: "Fleuve" }
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
    
    // Récupérer les nombres d'imposteurs et Mr White
    const imposteurCount = parseInt(document.getElementById('imposteurCount').value);
    const mrWhiteCount = parseInt(document.getElementById('mrWhiteCount').value);
    
    // Vérifier si on a assez de joueurs
    const totalSpecial = imposteurCount + mrWhiteCount;
    if (totalSpecial >= gameState.playerCount) {
        alert('Pas assez de joueurs ! Il faut au moins un citoyen.');
        return;
    }
    
    // Créer la liste des rôles
    const roles = [];
    
    // Ajouter les imposteurs
    for (let i = 0; i < imposteurCount; i++) {
        roles.push('imposteur');
    }
    
    // Ajouter les Mr White
    for (let i = 0; i < mrWhiteCount; i++) {
        roles.push('mrWhite');
    }
    
    // Le reste sont des citoyens
    for (let i = totalSpecial; i < gameState.playerCount; i++) {
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
    wordElement.style.background = '';
    
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
            wordElement.style.background = 'linear-gradient(135deg, #c1121f, #780000)';
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
    
    alivePlayers.forEach((player, index) => {
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
    
    // Vérifier si c'est SEULEMENT un imposteur éliminé (pas Mr White)
    if (player.role === 'imposteur') {
        // Seul l'imposteur peut tenter de deviner
        gameState.gamePhase = 'guess';
        switchPhase('phase-guess');
        document.getElementById('guessingPlayer').textContent = eliminatedPlayer;
        document.getElementById('guessingPlayerName').textContent = eliminatedPlayer;
    } else {
        // C'était un citoyen ou Mr White, vérifier les conditions de victoire
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
        // L'imposteur gagne !
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
        // Tous les imposteurs ET Mr White sont éliminés, les citoyens gagnent
        endGame('citizens', 'Tous les imposteurs et Mr White ont été éliminés !');
    } else {
        // Le jeu continue tant qu'il reste des imposteurs OU des Mr White
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
    
    gameState.players.forEach((player, index) => {
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