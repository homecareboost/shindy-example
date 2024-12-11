document.addEventListener("DOMContentLoaded", () => {
    try {
        const bodyTemplateSource = document.getElementById("main-content").innerHTML;
        const template = Handlebars.compile(bodyTemplateSource);
        const context = {
            ...data,
            headerContent: data.header(),
            footerContent: data.footer()
        };
        const compiledHtml = template(context);
        document.getElementById("main-content").innerHTML = compiledHtml;
    } catch (error) {
        console.error("Error in the compilation of Handlebars:", error);
    }
});