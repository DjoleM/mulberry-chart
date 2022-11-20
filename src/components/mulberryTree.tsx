
import "./mulberry.scss";

export type MulberryTreeType = {
    node: JSX.Element,
    children?: MulberryTreeType[]|undefined,
}

type MulberryTreeProps = {
    tree: MulberryTreeType,
    root?: boolean,
}

export const MulberryTree = ({ tree, root = false } : MulberryTreeProps ) => {
    let childElements : JSX.Element[] = [];
    let mulberryClassSuffix = "";
    if (root) {
        mulberryClassSuffix = " top-node";
    }
    if (!tree.children) {
        mulberryClassSuffix = " leaf-node";
    } else {
        childElements = tree.children.map(child => <MulberryTree tree={child} /> );
    }

    return (
        <div className={ "mulberry-section" + mulberryClassSuffix }>
            <div className="parent-link">
                <div className="left-edge"></div>
                <div className="top-edge"></div>
                <div className="right-edge"></div>

            </div>
            <div className="content">
                {tree.node}
            </div>
            <div className="child-link">
                <div className="bottom-edge"></div>
            </div>
            <div className="children-section">
                {childElements}
            </div>
            
        </div>
    );
}