import { BodyNode, DomNode, el } from "@hanul/skynode";
import { View, ViewParams } from "skyrouter";

export default class Home implements View {
    private container: DomNode;


    constructor() {
        BodyNode.append(
            (this.container = el(".home-view",
                el("header",
                    el("h1",
                        el("p.cases", "Cases"),
                        el("p", "By Kate"),
                    ),
                    el("a.connect-wallet", "connect wallet"),
                ),
                el("main",
                    el(".match-box",
                        el("img", { src: "/images/img/daco.png", alt: "daco" }),
                        el("p", "MINT MATCHBOX"),
                        el("img.button", { src: "/images/img/button.png", alt: "button" })
                    ),
                    el("img"),
                ),
            ))
        );
    }

    public changeParams(params: ViewParams, uri: string): void { }

    public close(): void {
        this.container.delete();
    }
}
