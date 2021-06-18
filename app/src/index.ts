window.onload = async function api() {
    const { text } = await (await fetch(`/api/message`)).json();
    document.querySelector('#name')!.textContent = text;
}