import { ReactPortal } from 'react';
import { ExcalidrawElement } from '@excalidraw/excalidraw/dist/types/excalidraw/element/types';
import { AppState, BinaryFiles, ExcalidrawImperativeAPI } from '@excalidraw/excalidraw/dist/types/excalidraw/types';

type Props = {
    closeOnClickOutside?: boolean;
    /**
     * The initial set of elements to draw into the scene
     */
    initialElements: ReadonlyArray<ExcalidrawElement>;
    /**
     * The initial set of elements to draw into the scene
     */
    initialAppState: AppState;
    /**
     * The initial set of elements to draw into the scene
     */
    initialFiles: BinaryFiles;
    /**
     * Controls the visibility of the modal
     */
    isShown?: boolean;
    /**
     * Callback when closing and discarding the new changes
     */
    onClose: () => void;
    /**
     * Completely remove Excalidraw component
     */
    onDelete: () => void;
    /**
     * Callback when the save button is clicked
     */
    onSave: (elements: ReadonlyArray<ExcalidrawElement>, appState: Partial<AppState>, files: BinaryFiles) => void;
};
export declare const useCallbackRefState: () => readonly [ExcalidrawImperativeAPI | null, (value: ExcalidrawImperativeAPI | null) => void];
/**
 * @explorer-desc
 * A component which renders a modal with Excalidraw (a painting app)
 * which can be used to export an editable image
 */
export default function ExcalidrawModal({ closeOnClickOutside, onSave, initialElements, initialAppState, initialFiles, isShown, onDelete, onClose, }: Props): ReactPortal | null;
export {};
//# sourceMappingURL=ExcalidrawModal.d.ts.map