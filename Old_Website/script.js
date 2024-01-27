/**
 * @Author: Hannah Shader
 * @Date:   2024-01-17 17:46:46
 * @Last Modified by:   Hannah Shader
 * @Last Modified time: 2024-01-17 17:52:14
 */
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.image-link');
    
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const url = link.getAttribute('href');
            window.open(url, '_blank');
        });
    });
});