function pedir(producto) {

    const telefono = "573000000000";

    const mensaje =
        `Hola 👋, quiero pedir: ${producto}`;

    const url =
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
}