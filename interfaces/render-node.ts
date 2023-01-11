export interface RenderNode {
    type: string;
    props: { [key: string]: any };
    children: string | RenderNode[];
}
