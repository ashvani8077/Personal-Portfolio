document.getElementById('cvBtn').addEventListener('click', function () {
    // Google Drive file ID from the provided link
    const fileId = '1lb83zT8sLztgTNa2LMDrrDE3ZNWUF4JA';
    // Direct download URL for the file
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
    
    // Redirect to the direct download link
    window.location.href = downloadUrl;
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.progress-line span').forEach((span) => {
    observer.observe(span);
});