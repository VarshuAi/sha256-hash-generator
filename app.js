
            const inp = document.getElementById('sha-input');
            const out = document.getElementById('sha-output');
            
            // Fast JS SHA-256 implementation representation
            async function generateHash(str) {
                const encoder = new TextEncoder();
                const data = encoder.encode(str);
                const hashBuffer = await crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                return hashHex;
            }
            inp.addEventListener('input', async () => {
                out.value = await generateHash(inp.value);
            });
            generateHash("Hello World").then(h => out.value = h);
        