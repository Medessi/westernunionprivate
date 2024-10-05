let balance = 0;
    const correctAccessCode = "Faith12345";
    const accountName = "Elżbieta Grzeszczyk";
    const correctPassword = "Faith12345";
    let currentSlide = 0;

    const translations = {
      en: {
        login: "Login",
        signup: "Sign Up",
        username: "Username",
        password: "Password",
        accessCode: "Access Code",
        sendMoney: "Send Money",
        receiveMoney: "Receive Money",
        withdrawMoney: "Withdraw Money",
        userProfile: "User Profile",
        accountBalance: "Account Balance",
        welcome: "Welcome",
        withdraw: "Withdraw",
        receive: "Receive",
        track: "Track",
        locations: "Locations",
        home: "Home",
        transfers: "Transfers",
        activity: "Activity",
        profile: "Profile",
        recipientName: "Recipient Name",
        recipientCountry: "Recipient Country",
        amountToSend: "Amount to send",
        send: "Send",
        senderName: "Sender Name",
        mtcnNumber: "MTCN Number",
        amountToWithdraw: "Amount to withdraw",
        editProfile: "Edit Profile",
        alreadyHaveAccount: "Already have an account?",
        dontHaveAccount: "Don't have an account?"
      },
      fr: {
        login: "Connexion",
        signup: "S'inscrire",
        username: "Nom d'utilisateur",
        password: "Mot de passe",
        accessCode: "Code d'accès",
        sendMoney: "Envoyer de l'argent",
        receiveMoney: "Recevoir de l'argent",
        withdrawMoney: "Retirer de l'argent",
        userProfile: "Profil utilisateur",
        accountBalance: "Solde du compte",
        welcome: "Bienvenue",
        withdraw: "Retirer",
        receive: "Recevoir",
        track: "Suivre",
        locations: "Agences",
        home: "Accueil",
        transfers: "Transferts",
        activity: "Activité",
        profile: "Profil",
        recipientName: "Nom du destinataire",
        recipientCountry: "Pays du destinataire",
        amountToSend: "Montant à envoyer",
        send: "Envoyer",
        senderName: "Nom de l'expéditeur",
        mtcnNumber: "Numéro MTCN",
        amountToWithdraw: "Montant à retirer",
        editProfile: "Modifier le profil",
        alreadyHaveAccount: "Déjà un compte ?",
        dontHaveAccount: "Pas de compte ?"
      },
      pl: {
        login: "Zaloguj się",
        signup: "Zarejestruj się",
        username: "Nazwa użytkownika",
        password: "Hasło",
        accessCode: "Kod dostępu",
        sendMoney: "Wyślij pieniądze",
        receiveMoney: "Odbierz pieniądze",
        withdrawMoney: "Wypłać pieniądze",
        userProfile: "Profil użytkownika",
        accountBalance: "Stan konta",
        welcome: "Witaj",
        withdraw: "Wypłać",
        receive: "Odbierz",
        track: "Śledź",
        locations: "Lokalizacje",
        home: "Strona główna",
        transfers: "Przelewy",
        activity: "Aktywność",
        profile: "Profil",
        recipientName: "Nazwa odbiorcy",
        recipientCountry: "Kraj odbiorcy",
        amountToSend: "Kwota do wysłania",
        send: "Wyślij",
        senderName: "Nazwa nadawcy",
        mtcnNumber: "Numer MTCN",
        amountToWithdraw: "Kwota do wypłaty",
        editProfile: "Edytuj profil",
        alreadyHaveAccount: "Masz już konto?",
        dontHaveAccount: "Nie masz konta?"
      }
    };

    function translateTo(lang) {
      const elements = document.querySelectorAll('[data-translate]');
      elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
          if (element.getAttribute('data-translate-attr') === 'placeholder') {
            element.placeholder = translations[lang][key];
          } else {
            element.textContent = translations[lang][key];
          }
        }
      });
      document.documentElement.lang = lang;
    }

    function showLoading() {
      document.getElementById('loadingScreen').style.display = 'flex';
    }

    function hideLoading() {
      document.getElementById('loadingScreen').style.display = 'none';
    }

    function showLogin() {
      document.getElementById('loginScreen').style.display = 'block';
      document.getElementById('signupScreen').style.display = 'none';
    }

    function showSignup() {
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('signupScreen').style.display = 'block';
    }

    function showMain() {
      document.getElementById('mainScreen').style.display = 'block';
      document.getElementById('loginScreen').style.display = 'none';
      document.getElementById('signupScreen').style.display = 'none';
      document.getElementById('sendMoneyScreen').style.display = 'none';
      document.getElementById('receiveMoneyScreen').style.display = 'none';
      document.getElementById('withdrawMoneyScreen').style.display = 'none';
      document.getElementById('profileScreen').style.display = 'none';
      updateBalance();
    }

    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const accessCode = document.getElementById('accessCode').value;

      showLoading();

      setTimeout(() => {
        hideLoading();
        if (username === accountName && password === correctPassword && accessCode === correctAccessCode) {
          showMain();
          showNotification("Connexion réussie !");
        } else {
          alert("Identifiants incorrects. Veuillez réessayer.");
        }
      }, 1500);
    }

    function signup() {
      const username = document.getElementById('newUsername').value;
      const password = document.getElementById('newPassword').value;
      const accessCode = document.getElementById('newAccessCode').value;

      showLoading();

      setTimeout(() => {
        hideLoading();
        alert("Inscription réussie! Vous pouvez maintenant vous connecter.");
        showLogin();
      }, 1500);
    }

    function updateBalance() {
      document.getElementById('accountName').textContent = accountName;
      document.getElementById('balanceAmount').textContent = balance.toLocaleString();
    }

    function showSendMoney() {
      document.getElementById('mainScreen').style.display = 'none';
      document.getElementById('sendMoneyScreen').style.display = 'block';
    }

    function showReceiveMoney() {
      document.getElementById('mainScreen').style.display = 'none';
      document.getElementById('receiveMoneyScreen').style.display = 'block';
    }

    function showWithdrawMoney() {
      document.getElementById('mainScreen').style.display = 'none';
      document.getElementById('withdrawMoneyScreen').style.display = 'block';
    }

    function showProfile() {
      document.getElementById('mainScreen').style.display = 'none';
      document.getElementById('profileScreen').style.display = 'block';
    }

    function editProfile() {
      alert("Fonctionnalité de modification du profil en cours de développement.");
    }

    function showNotification(message) {
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = message;
      document.body.appendChild(notification);
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
        notification.remove();
      }, 3000);
    }

    function moveCarousel(direction) {
      const items = document.querySelectorAll('.carousel-item');
      currentSlide = (currentSlide + direction + items.length) % items.length;
      document.querySelector('.carousel-inner').style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function sendMoney() {
      const amount = parseFloat(document.getElementById('transferAmount').value);
      if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
      }
      if (amount > balance) {
        alert("Solde insuffisant.");
        return;
      }

      showLoading();

      setTimeout(() => {
        hideLoading();
        balance -= amount;
        updateBalance();
        showNotification(`Transfert de ${amount} PLN effectué avec succès.`);
        showMain();
      }, 2000);
    }

    function receiveMoney() {
      const mtcn = document.getElementById('mtcn').value;
      if (mtcn!=8728268529) {
        alert("Veuillez entrer un numéro MTCN valide.");
        return;
      }

      showLoading();

      setTimeout(() => {
        hideLoading();
        const receivedAmount =20000;
        balance += receivedAmount;
        updateBalance();
        showNotification(`Vous avez reçu ${receivedAmount} PLN.`);
        showMain();
      }, 2000);
    }

    function withdrawMoney() {
      const amount = parseFloat(document.getElementById('withdrawAmount').value);
      if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
      }
      if (amount > balance) {
        alert("Solde insuffisant.");
        return;
      }

      showLoading();

      setTimeout(() => {
        hideLoading();
        balance -= amount;
        updateBalance();
        showNotification(`Retrait de ${amount} PLN effectué avec succès.`);
        showMain();
      }, 2000);
    }

    function showTrackTransfer() {
      alert("Désolé, vous n'avez pas accès à cette fonctionnalité.");
    }

    function showFindLocation() {
      alert("Désolé, vous n'avez pas accès à cette fonctionnalité.");
    }

    function showTransfersHistory() {
      alert("Désolé, vous n'avez pas accès à cette fonctionnalité.");
    }

    function showActivity() {
      alert("Désolé, vous n'avez pas accès à cette fonctionnalité.");
    }

    // Initialize the app
    showLogin();
    setInterval(() => moveCarousel(1), 5000);