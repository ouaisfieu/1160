// arg-engine.js

// Configuration de la mission
const startDate = new Date("2024-02-01"); // Date de début fictive
const totalDays = 9;

// Contenu de l'Arpentage (Simulation)
// En prod, tu mettrais ici les liens vers les PDFs réels hébergés sur le serveur
const fragments = [
    { id: 1, title: "Intro : La construction médiatique du pauvre", pages: "p.3-5" },
    { id: 2, title: "Chapitre 1 : Verviers, ville témoin ?", pages: "p.6-9" },
    { id: 3, title: "Analyse : Le mythe du fraudeur", pages: "p.10-12" }
];

function startMission() {
    const name = document.getElementById('agent-name').value;
    if(!name) return alert("> ERREUR : IDENTIFICATION REQUISE");
    
    localStorage.setItem('agentName', name);
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
    document.getElementById('display-name').innerText = name.toUpperCase();
    
    loadDailyMission(name);
}

function loadDailyMission(agentName) {
    // Pour la démo, on simule que nous sommes au Jour 3
    // En prod : const today = new Date(); const dayDiff = ...
    const simulatedDay = 3; 
    
    const missionContainer = document.getElementById('daily-mission');
    let content = "";

    if (simulatedDay <= 4) {
        // PHASE 1 : ARPENTAGE
        // On génère un fragment unique basé sur le nom de l'agent (hachage simple)
        const fragmentIndex = agentName.length % fragments.length;
        const myFragment = fragments[fragmentIndex];

        content = `
            <div style="border: 1px solid #fff; padding: 15px; margin: 10px 0;">
                <span class="day-badge">JOUR ${simulatedDay}</span>
                <h3>MISSION : DÉCRYPTAGE THÉORIQUE</h3>
                <p>> CIBLE : "Images et usages de la pauvreté" - Cahiers EP</p>
                <p>> VOTRE SEGMENT : <strong>${myFragment.title} (${myFragment.pages})</strong></p>
                <p>> TÉLÉCHARGER LE PDF SÉCURISÉ : <a href="#" style="color:#fff">[LIEN CRYPTÉ]</a></p>
                <hr style="border-color:#334433">
                <p>RAPPORT D'ANALYSE :</p>
                <input type="text" placeholder="3 Mots-clés...">
                <textarea placeholder="Une phrase qui démonte le préjugé..." rows="3"></textarea>
                <button onclick="submitReport()">ENVOYER AU QG</button>
            </div>
        `;
    } else if (simulatedDay <= 7) {
        // PHASE 2 : VERVIERS (BONUS)
        content = `
            <div style="border: 1px solid #e63946; padding: 15px; margin: 10px 0; color: #ffcccc;">
                <span class="day-badge" style="background:#e63946; color:#fff">JOUR ${simulatedDay}</span>
                <h3>MISSION BONUS : VERVIERS CONTRE-ATTAQUE</h3>
                <p>> L'équipe de Deborsu filme près de la Vesdre. Ils cherchent du "misérabilisme".</p>
                <p>> VOTRE ORDRE : Trouvez une image (Street View ou Réelle) de Verviers qui montre de la DIGNITÉ.</p>
                <input type="text" placeholder="Collez le lien Google Maps/Image ici...">
                <button onclick="submitReport()">DÉPOSER LA PREUVE</button>
            </div>
        `;
    } else {
        // PHASE 3 : SYNTHÈSE
        content = `
            <div>
                <h3>> MISSION TERMINÉE. COMPILATION EN COURS...</h3>
                <p>Rendez-vous Jour 9 pour la diffusion du "Contre-Documentaire".</p>
            </div>
        `;
    }

    missionContainer.innerHTML = content;
}

function submitReport() {
    const btn = document.querySelector('button');
    btn.innerText = "TRANSMISSION...";
    setTimeout(() => {
        alert("> RAPPORT REÇU. LE FAN CLUB VOUS REMERCIE.");
        btn.innerText = "ENVOYÉ ✓";
        btn.disabled = true;
        document.getElementById('global-progress').value += 10;
    }, 1000);
}
