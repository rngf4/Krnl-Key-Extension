function main() {
    fetch(`https://bypass.pm/bypass2?url=${window.location.href}`)
        .then((res) => res.json())
        .then(({ destination }) => {
            window.location.href = destination;
        });
}

setTimeout(main, 16000);
