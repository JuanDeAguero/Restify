const translation = {
    "Adults": "Adultes",
    "April": "Avril",
    "August": "Août",
    "British Columbia": "Colombie Britannique",
    "Children": "Enfants",
    "Cozy City-View Terrace with Hot Tub": "Terrasse Confortable avec Vue sur la Ville et Bain à Remous",
    "December": "Décembre",
    "February": "Février",
    "First Name": "Prénom",
    "guest": "invité",
    "guests": "invités",
    "Guests": "Invités",
    "Infants": "Nourrissons",
    "January": "Janvier",
    "July": "Juillet",
    "June": "Juin",
    "Last Name": "Nom",
    "Location": "Lieu",
    "Login": "Connexion",
    "LOGIN": "CONNEXION",
    "Luxury Home in the Heart of the Mile-End": "Maison de Luxe au Coeur du Mile-End",
    "March": "Mars",
    "May": "Mai",
    "Modern Log Cabin": "Cabane en Rondins Moderne",
    "Montreal": "Montréal",
    "Mountain View Cabin Retreat Amidst Whispering Pines": "Retraite de Cabine avec Vue sur la Montagne au Milieu des Pins Murmurants",
    "November": "Novembre",
    "Oceanview Oasis: Tranquil Retreat by the Shore": "Oasis avec Vue sur l'Océan: Retraite Tranquille au Bord du Rivage",
    "October": "Octobre",
    "or sign up": "ou s'inscrire",
    "Panoramic City Views and Modern Comforts": "Vues Panoramiques sur la Ville et Confort Moderne",
    "Password": "Mot de Passe",
    "Penthouse Above the Clouds with Surreal Views": "Penthouse Au-dessus des Nuages avec des Vues Surréalistes",
    "Pets": "Animaux Domestiques",
    "Quebec": "Québec",
    "Quintessential Victorian Home": "Maison Victorienne par Excellence",
    "Retreat in the Snowy Woods": "Retraite dans les Bois Enneigés",
    "Retype Password": "Retaper le Mot de Passe",
    "Search": "Rechercher",
    "September": "Septembre",
    "Sign out": "Se déconnecter",
    "Sign Up": "S'Inscrire",
    "SIGN UP": "S'INSCRIRE",
    "Small Ancestral House in the City Center": "Petite Maison Ancestrale en Centre Ville",
    "There are no notifications.": "Il n'y a aucune notification."
};

const translate = (string) => {
    const language = localStorage.getItem("language");
    if (language === "en") {
        return Object.keys(translation).find(key => translation[key] === string) || string;
    } else if (language === "fr") {
        return translation[string] || string;
    }
};

export default translate;