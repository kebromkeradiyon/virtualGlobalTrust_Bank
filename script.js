document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenuBtn = document.querySelector('.close-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Animate account balances
    const balanceElements = document.querySelectorAll('.balance-amount');
    balanceElements.forEach(balance => {
        const amount = parseFloat(balance.textContent.replace('$', '').replace(',', ''));
        balance.textContent = '$0.00';
        
        let current = 0;
        const increment = amount / 30;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= amount) {
                clearInterval(timer);
                current = amount;
            }
            balance.textContent = '$' + current.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }, 30);
    });
    
    // Transaction filtering functionality
    const transactionRows = document.querySelectorAll('.table-body .table-row');
    const viewAllLink = document.querySelector('.view-all a');
    
    if (transactionRows.length > 3) {
        for (let i = 3; i < transactionRows.length; i++) {
            transactionRows[i].style.display = 'none';
        }
        
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            transactionRows.forEach(row => {
                row.style.display = '';
            });
            viewAllLink.style.display = 'none';
        });
    } else {
        viewAllLink.style.display = 'none';
    }
    
    // Simulate pending transaction completion
    setTimeout(() => {
        const pendingStatus = document.querySelector('.status-pending');
        if (pendingStatus) {
            pendingStatus.textContent = 'Completed';
            pendingStatus.className = 'status-completed';
        }
    }, 3000);
    
    // Quick actions animation
    const quickActions = document.querySelectorAll('.quick-action');
    quickActions.forEach(action => {
        action.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        action.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
    
    // Feature cards animation
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
});