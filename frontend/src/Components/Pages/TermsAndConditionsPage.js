const main = document.querySelector('main');
const body = document.querySelector('body');
body.style.overflow = 'auto';

// TODO style page better
const TermsAndConditionsPage = () => {
    main.innerHTML = `
    <section class="container">
    <h1>Conditions d'utilisations de Izyskin.™</h1>
    <ul>Dernière mise à jour le 15-12-23 04:16</ul>
    <div class="container">
        <p>
        Veuillez lire attentivement les conditions d'utilisation suivantes avant d'utiliser Izyskin..com.
        Votre accès et utilisation du Service sont conditionnés à votre acceptation et conformité avec ces Conditions. Ces Conditions s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le Service.
        En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Conditions. Si vous êtes en désaccord avec une partie quelconque des termes, vous ne pourrez pas accéder au Service.
        </p>
    
    <h3>Compte et sécurité</h3>
    <p>
        Pour accéder à certains aspects du Service, vous devrez peut-être créer un compte. Vous êtes responsable de maintenir la confidentialité des informations de votre compte, y compris votre mot de passe, et vous êtes entièrement responsable de toute activité qui se produit sous votre compte.
        Vous acceptez de notifier immédiatement Izyskin.™ de toute utilisation non autorisée de votre compte ou de toute autre violation de la sécurité. Izyskin.™ ne sera pas responsable des pertes résultant de l'accès non autorisé à votre compte, et vous pourriez être tenu responsable des pertes encourues par Izyskin.™ ou par d'autres utilisateurs du Service en raison de l'accès non autorisé à votre compte.
    </p>
    <h3>Utilisation du Service</h3>
    <p>
        Le Service fournit un questionnaire permettant de générer des recommandations de produits de skincare personnalisée. En utilisant ce Service, vous comprenez et acceptez que les recommandations fournies sont basées sur les informations fournies dans le questionnaire et peuvent varier en fonction des informations fournies.
        Vous acceptez que les informations fournies dans le questionnaire soient exactes, complètes et à jour au meilleur de votre connaissance.
    </p>
    <h3>Propriété intellectuelle</h3>
    <p>
        Le Service et son contenu, y compris mais sans s'y limiter, le texte, les images, les graphiques ou le code, sont la propriété de Izyskin.™ et sont protégés par les lois sur le droit d'auteur et autres lois sur la propriété intellectuelle.
        Vous ne pouvez pas reproduire, distribuer, modifier, afficher, transmettre, vendre ou exploiter de quelque manière que ce soit, en totalité ou en partie, tout contenu obtenu à travers le Service sans le consentement écrit préalable de Izyskin.™.
    </p>
    <h3>Limitation de responsabilité</h3>
    <p>
        Le Service est fourni "tel quel" sans garantie d'aucune sorte, expresse ou implicite. Izyskin.™ ne garantit pas l'exactitude, la pertinence ou l'exhaustivité des recommandations de produits.
        En aucun cas, Izyskin.™ ne sera responsable de tout dommage direct, indirect, accidentel, spécial, consécutif ou exemplaire résultant de votre utilisation du Service ou de tout contenu obtenu à travers celui-ci.
    </p>
    </div>
    </section>
    `;

}

export default TermsAndConditionsPage;