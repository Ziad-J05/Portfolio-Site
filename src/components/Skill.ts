import { ReactElement } from "react";

export enum SkillType{
    Language,
    Software,
    Library,
    Framework,
    NonScriptLang
}

export class Skill{
    name: string;
    icon: ReactElement;
    type: SkillType;

    constructor(name: string, icon: ReactElement, type: SkillType){
        this.name = name;
        this.icon = icon;
        this.type = type;
    }
}