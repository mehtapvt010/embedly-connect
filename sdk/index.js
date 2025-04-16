(function(window, document){
    const EmbedlyConnect={
        init: function(options={}){
            if(!options.clientId){
                console.error("EmbedlyConnect: clientId is required");
                return;
            }

            const script=document.createElement("script");
            script.src=options.widgetUrl || "https://cdn.embedly.com/widgets/platform.js"; //demo
            script.defer=true;
            document.head.appendChild(script);

            script.onload=()=>{
                const widget=document.createElement("feedback-widget");
                widget.setAttribute("client-id", options.clientId);
                if(options.theme){
                    widget.setAttribute("theme", options.theme);
                }

                document.body.appendChild(widget);
            }
        }

    } 
    window.EmbedlyConnect=EmbedlyConnect
}) (window, document);