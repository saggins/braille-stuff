
<script lang=ts>
    import HalfCircle from '$lib/components/HalfCircle.svelte';
	import ThickLine from '$lib/components/ThickLine.svelte';
	import ToBraile from '$lib/components/ToBraile.svelte';

    let text : String = "";
</script>

<textarea bind:value={text}/>
<button on:click={ ()=> window.print()}> print me</button>


<h2>Test Ballot</h2>
<table style="width:100%">
    <tbody>
        {#each text.split('\n') as line}
            <tr>
                <td>
                    <ToBraile ASSCIText={line}/>
                </td>
                <td>
                    <ThickLine/>
                </td>
                <td>
                    <HalfCircle/>
                </td>
            </tr>
        {/each}
    </tbody>
</table>


<style>
    p{
        background-color: #000000;
    }
    @media print {
        textarea {
            display:none
        }
        body{ background-color:#FFFFFF; background-image:none; color:#000000 }
        #ad{ display:none;}
        #leftbar{ display:none;}
        #contentarea{ width:100%;}
    }
    /* style sheet for "A4" printing */
    @media print and (width: 21cm) and (height: 29.7cm) {
        @page {
            margin: 3cm;
        }
    }
    /* style sheet for "letter" printing */
    @media print and (width: 8.5in) and (height: 11in) {
        @page {
            margin: 1in;
        }
    }
</style>