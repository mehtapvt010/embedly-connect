import { FeedbackWidget } from './FeedbackWidget.js';

(function(window, document){
    const EmbedlyConnect={
        init: function(options={}){
            if(!options.clientId){
                console.error("EmbedlyConnect: clientId is required");
                return;
            }

            if (!customElements.get('feedback-widget')) {
                customElements.define('feedback-widget', FeedbackWidget);
              }
        
              const widget = document.createElement('feedback-widget');
              widget.setAttribute('client-id', options.clientId);
              if (options.theme) {
                widget.setAttribute('theme', options.theme);
              }
        
              document.body.appendChild(widget);
            }
          };
        
          window.EmbedlyConnect = EmbedlyConnect;
})(window, document);
        
export { FeedbackWidget };