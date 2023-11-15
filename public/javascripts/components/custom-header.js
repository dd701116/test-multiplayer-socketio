class CustomHeader extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = this.render()
    }

    render() {
        return "<header class=\"p-5 text-center\">\n" +
            "      <div class=\"d-flex m-auto\" style=\"width: fit-content\">\n" +
            "        <img src=\"/images/wolf-1.png\" alt=\"wolf\" style='width: 80px; height: 80px'>\n" +
            "        <h1 class=\"p-3\">Wolf&Sheep</h1>\n" +
            "        <img src=\"/images/sheep-1.png\" alt=\"sheep\" style='width: 80px; height: 80px'>\n" +
            "      </div>\n" +
            "    </header>"
    }
}

customElements.define("custom-header", CustomHeader)

