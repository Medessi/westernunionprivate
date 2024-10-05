let balance = 0;
    const correctAccessCode = "Faith12345";
    const accountName = "Elżbieta Grzeszczyk";
    const mtcncode = "872 826 8529"
    const correctPassword = "Faith12345";
    let currentSlide = 0;

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
      alert("Désolé, vous n'avez pas accès à ses fonctionnalités pour le moment.");
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
      if (mtcn!=8728268529 ) {
        alert("Veuillez entrer un numéro MTCN valide.");
        return;
      }

      showLoading();

      setTimeout(() => {
        hideLoading();
        const receivedAmount = 20000;
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
      alert("Désolé, vous n'avez pas accès à ses fonctionnalités pour le moment.");
    }

    function showFindLocation() {
      alert("Désolé, vous n'avez pas accès à ses fonctionnalités pour le moment.");
    }

    function showTransfersHistory() {
      alert("Désolé, vous n'avez pas accès à ses fonctionnalités pour le moment.");
    }

    function showActivity() {
      alert("Désolé, vous n'avez pas accès à ses fonctionnalités pour le moment.");
    }

    // Initialize the app
    showLogin();
    setInterval(() => moveCarousel(1), 5000);