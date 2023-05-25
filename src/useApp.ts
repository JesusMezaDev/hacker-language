import { ref, watch } from 'vue';

export const useApp = () => {
    const textToEncrypt = ref<string>('');
    const textToDecrypt = ref<string>('');
    const cryptedMessage = ref<string>('');
    const decryptedMessage = ref<string>('');
    const normalAlphabet = {
        a: '4',
        b: 'I3',
        c: '[',
        d: ')',
        e: '3',
        f: '|=',
        g: '&',
        h: '#',
        i: '!',
        j: ',_|',
        k: '>|',
        l: '1',
        m: '/\\/\\',
        n: '^/',
        o: '0',
        p: '|*',
        q: '(_,)',
        r: 'I2',
        s: '5',
        t: '7',
        u: '(_)',
        v: '\\/',
        w: '\\/\\/',
        x: '><',
        y: 'j',
        z: '2',
    }

    const hacckerAlphabet = {
        '4': 'a',
        'I3': 'b',
        '[': 'c',
        ')': 'd',
        '3': 'e',
        '|=': 'f',
        '&': 'g',
        '#': 'h',
        '!': 'i',
        ',_|': 'j',
        '>|': 'k',
        '1': 'l',
        '/\\/\\': 'm',
        '^/': 'n',
        '0': 'o',
        '|*': 'p',
        '(_,)': 'q',
        'I2': 'r',
        '5': 's',
        '7': 't',
        '(_)': 'u',
        '\\/': 'v',
        '\\/\\/': 'w',
        '><': 'x',
        'j': 'y',
        '2': 'z',
    }

    watch(
        () =>
            textToEncrypt.value, () => {
                if (textToEncrypt.value.trim().length === 0) cryptedMessage.value = '';
            },
    );

    return {
        cryptedMessage,
        decryptedMessage,
        textToEncrypt,
        textToDecrypt,
        encryptMessage: () => {
            if (textToEncrypt.value.trim().length === 0) return;
            
            const newText = textToEncrypt.value.split('').map(letter => normalAlphabet[letter.toLowerCase() as keyof typeof normalAlphabet] || letter).join('');
            cryptedMessage.value = newText;
        },
        decryptMessage: () => {
            if (textToDecrypt.value.trim().length === 0) return;

            const newText = textToDecrypt.value.split('').map(letter => hacckerAlphabet[letter.toLocaleLowerCase() as keyof typeof hacckerAlphabet] || letter).join('');
            decryptedMessage.value = newText;
        },
        
    }
}