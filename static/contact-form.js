document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const btn = document.getElementById('submit-btn');
    const status = document.getElementById('form-status');
    const formData = new FormData(form);

    status.textContent = 'SENDING...';
    status.className = 'label-caps uppercase tracking-widest text-on-surface-alt';

    try {
        const response = await fetch('https://contact-me-35gjb474wq-uw.a.run.app/', {
            method: 'POST',
            body: new URLSearchParams(formData)
        });

        response.json().then((resp_obj) => {
            if (resp_obj.success) {
                status.textContent = 'MESSAGE SENT';
                status.className = 'label-caps uppercase tracking-widest text-primary-dim';
                btn.disabled = true;
                btn.classList.add('opacity-50', 'cursor-not-allowed');
            } else {
                // if success is false then error is provided
                status.textContent = 'ERROR: ' + resp_obj.error.toUpperCase();
                status.className = 'label-caps uppercase tracking-widest text-red-400';
            }
        });
    } catch (err) {
        status.textContent = 'ERROR SENDING REQUEST';
        status.className = 'label-caps uppercase tracking-widest text-red-400';
    }
});
