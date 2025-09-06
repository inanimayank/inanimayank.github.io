document.addEventListener('DOMContentLoaded', function() {
    // Certification filtering
    const filterButtons = document.querySelectorAll('#certification-filters button');
    const certificationItems = document.querySelectorAll('.certification-item');

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-blue-600', 'text-white');
                btn.classList.add('bg-white', 'text-blue-600');
            });

            // Add active class to clicked button
            button.classList.remove('bg-white', 'text-blue-600');
            button.classList.add('bg-blue-600', 'text-white');

            const category = button.getAttribute('data-category');

            // Show/hide certification items based on category
            certificationItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
