import { ActionMacros, SkillActionOptions } from "..";

export function gatherInformation(options: SkillActionOptions) {
    const { checkType, property, stat, subtitle } = ActionMacros.resolveStat(options?.skill ?? "diplomacy");
    ActionMacros.simpleRollActionCheck({
        actors: options.actors,
        statName: property,
        actionGlyph: options.glyph,
        title: "PF2E.Actions.GatherInformation.Title",
        subtitle,
        modifiers: options.modifiers,
        rollOptions: ["all", checkType, stat, "action:gather-information"],
        extraOptions: ["action:gather-information"],
        traits: ["exploration", "secret"],
        checkType,
        event: options.event,
        callback: options.callback,
        difficultyClass: options.difficultyClass,
        extraNotes: (selector: string) => [
            ActionMacros.note(selector, "PF2E.Actions.GatherInformation", "success"),
            ActionMacros.note(selector, "PF2E.Actions.GatherInformation", "criticalFailure"),
        ],
    });
}
