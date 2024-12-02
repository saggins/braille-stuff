<script lang=ts>
// @ts-nocheck
// it's forntend code who gives fk

    export let ASSCIText : String = "fsfdfd";
    // Thx Sebdabado https://github.com/Sebdababo/Braille-Translator
    const brailleMap = {
        'a': '⠁', 'b': '⠃', 'c': '⠉', 'd': '⠙', 'e': '⠑', 'f': '⠋',
        'g': '⠛', 'h': '⠓', 'i': '⠊', 'j': '⠚', 'k': '⠅', 'l': '⠇',
        'm': '⠍', 'n': '⠝', 'o': '⠕', 'p': '⠏', 'q': '⠟', 'r': '⠗',
        's': '⠎', 't': '⠞', 'u': '⠥', 'v': '⠧', 'w': '⠺', 'x': '⠭',
        'y': '⠽', 'z': '⠵', ' ': ' ', '.': '⠲', ',': '⠂', '!': '⠖',
        '?': '⠦', "'": '⠄', '"': '⠐⠂', '-': '⠤', '0': '⠼⠚', '1': '⠼⠁',
        '2': '⠼⠃', '3': '⠼⠉', '4': '⠼⠙', '5': '⠼⠑', '6': '⠼⠋',
        '7': '⠼⠛', '8': '⠼⠓', '9': '⠼⠊'
    };

    const reverseBrailleMap = Object.fromEntries(
        Object.entries(brailleMap).map(([key, value]) => [value, key])
    );

    $: braileText = ASSCIText.split('').map( l => brailleMap[l]).join('')

</script>

<span class=braile>
    {braileText}
</span>
<br>
{ASSCIText}
<style>
    .braile {

        font-weight: bold;
        font-size: 100px;
    }

</style>
