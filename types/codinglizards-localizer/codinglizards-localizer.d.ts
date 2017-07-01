declare module Express {
    export interface Request {
        localize: (string) => string;
    }
}

declare module "codinglizards-localizer" {
    export function initialize(options: LocalizerOptions): void;
    export function localize(): string;
    interface LocalizerOptions {
        path: string;
    }

    export var options: LocalizerOptions;
}
