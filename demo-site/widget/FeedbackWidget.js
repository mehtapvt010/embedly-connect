class FeedbackWidget extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open' });

    }

    connectedCallback() {
        this.state={
            theme: this.getAttribute('theme') || 'light',
            clientId: this.getAttribute('client-id') || null,
        };
        this.render();
    }

    render() {
        const theme = this.state;

        this.shadowRoot.innerHTML = ` 

            <style>
                :host {
                    font-family: Arial, sans-serif;
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    z-index: 9999;
                }

                .widget {
                    background: ${theme === 'dark' ? '#333' : '#fff'};
                    color: ${theme === 'dark' ? '#fff' : '#000'};
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    padding: 16px;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                    width: 250px;
                }

                input, textarea {
                    width: 100%;
                    margin-top: 8px;
                    margin-bottom: 12px;
                    padding: 6px;
                    border-radius: 4px;
                    border: 1px solid #ccc;
                }

                button {
                    background-color: ${theme === 'dark' ? '#555' : '#007bff'};
                    color: white;
                    padding: 8px 12px;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: ${theme === 'dark' ? '#666' : '#0056b3'};
                }
            </style>

            <div class="widget">
                <strong>Send us your feedback</strong>
                <form id="feedbackForm">
                <input type="text" name="name" placeholder="Your Name" required />
                <textarea name="message" rows="4" placeholder="Your Feedback" required></textarea>
                <button type="submit">Submit</button>
                </form>
            </div>
        
        `;

        const form=this.shadowRoot.querySelector('#feedbackForm');
        form.addEventListener('submit', this.handleSubmit.bind(this));

    }

    handleSubmit(event) {
        event.preventDefault();
        const form=event.target;

        const feedbackData={
            clientId: this.state.clientId,
            name: form.name.value.trim(),
            message: form.message.value.trim(),
            timestamp: new Date().toISOString(),
        };

        fetch('http://localhost:4000/api/feedback', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feedbackData)
          })
          .then(res => res.json())
          .then(data => {
            console.log('[EmbedlyConnect] Server response:', data);
            alert('Thank you for your feedback!');
          })
          .catch(err => {
            console.error('[EmbedlyConnect] Error submitting feedback:', err);
            alert('Something went wrong.');
          });
          
    }
}

customElements.define('feedback-widget', FeedbackWidget);