import { ActionMacros, SkillActionOptions } from "..";

export function commandAnAnimal(options: SkillActionOptions) {
    const { checkType, property, stat, subtitle } = ActionMacros.resolveStat(options?.skill ?? "nature");
    ActionMacros.simpleRollActionCheck({
        actors: options.actors,
        statName: property,
        actionGlyph: options.glyph ?? "A",
        title: "PF2E.Actions.CommandAnAnimal.Title",
        subtitle,
        modifiers: options.modifiers,
        rollOptions: ["all", checkType, stat, "action:command-an-animal"],
        extraOptions: ["action:command-an-animal"],
        traits: ["auditory", "concentrate"],
        checkType,
        event: options.event,
        callback: options.callback,
        difficultyClass: options.difficultyClass,
        difficultyClassStatistic: (target) => target.saves.will,
        extraNotes: (selector: string) => [
            ActionMacros.note(selector, "PF2E.Actions.CommandAnAnimal", "success"),
            ActionMacros.note(selector, "PF2E.Actions.CommandAnAnimal", "failure"),
            ActionMacros.note(selector, "PF2E.Actions.CommandAnAnimal", "criticalFailure"),
        ],
    });
}
