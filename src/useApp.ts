import { ref, watch } from 'vue';

export const useApp = () => {
    const textToEncrypt = ref<string>('');
    const textToDecrypt = ref<string>('');
    const cryptedMessage = ref<string>('');
    const decryptedMessage = ref<string>('');
    const alphabet: { [key: string]: string }  = {
        a: '4‎',
        b: 'I3‎',
        c: '[‎',
        d: ')‎',
        e: '3‎',
        f: '|=‎',
        g: '&‎',
        h: '#‎',
        i: '!‎',
        j: ',_|‎',
        k: '>|‎',
        l: '1‎',
        m: '/\\/\\‎',
        n: '/V‎',
        o: '0‎',
        p: '|*‎',
        q: '(_,)‎',
        r: 'I2‎',
        s: '5‎',
        t: '7‎',
        u: '(_)‎',
        v: '\\/‎',
        w: '\\/\\/‎',
        x: '><‎',
        y: 'j‎',
        z: '2‎',
    }

    watch(
        () =>
            textToDecrypt.value, () => {
                if (textToEncrypt.value.trim().length === 0) cryptedMessage.value = '';
            },
    );

    watch(
        () =>
            textToDecrypt.value, () => {
                if (textToDecrypt.value.trim().length === 0) decryptedMessage.value = '';
            },
    );

    return {
        cryptedMessage,
        decryptedMessage,
        textToEncrypt,
        textToDecrypt,
        encryptMessage: () => {
            if (textToEncrypt.value.trim().length === 0) return;
            
            const newText = textToEncrypt.value.split('').map(letter => alphabet[letter.toLowerCase() as keyof typeof alphabet] || letter).join('');
            cryptedMessage.value = newText;
        },
        decryptMessage:  () => {
            if (textToDecrypt.value.trim().length === 0) return;
            
            let newText = '';
            decryptedMessage.value = '';
            const words = textToDecrypt.value.split(' ');
            for(let word of words) {
                newText += word.split('‎').map(letter => Object.keys(alphabet).find(key => alphabet[key] === letter.trim() + '‎') || letter).join('');
                newText += ' ';
            }
            decryptedMessage.value = newText;
        }
    }
}