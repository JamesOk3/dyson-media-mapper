
/**
 * Creates an overlay component that covers the entire screen.
 *
 * @return {JSX.Element} The overlay component.
 *
 * @author James M Kambanga
 * Date: April 4, 2024,
 * Copyright (C) 2024 Newcastle University, UK
 */
function Overlay() {
    return (
        <div className={`fixed left-0 top-0 z-999999 flex h-full min-h-screen w-full items-center justify-center bg-black/90 px-4 py-5`}>
        </div>
    );
}

export default Overlay;