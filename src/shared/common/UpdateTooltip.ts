import { Coodinates } from "../ui/TooltipPopover";

export class UpdateToolyip {
    static updateTooltipCoords = (e: any, shiftX: number, shiftY: number): Coodinates => {
        const rect = e.getBoundingClientRect();
        return {
            left: rect.x + shiftX,
            top: rect.y + shiftY
        } as Coodinates;
    }
}