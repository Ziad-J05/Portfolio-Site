import { Skill, SkillType } from "../components/Skill";
import { CsharpPlain, UnityPlain, CplusplusPlain, JavascriptPlain, ReactOriginal, Html5Plain, Css3Plain, JavaPlain, TypescriptPlain, GodotPlain, PythonPlain, BlenderOriginal, MayaPlain, TailwindcssOriginal} from 'devicons-react';

export const MySkills: Record<string, Skill> = {
  "CSharp": new Skill("C#", <CsharpPlain size="26" className="*:fill-black"/>, SkillType.Language),
  "Unity": new Skill("Unity", <UnityPlain size="26" className="*:fill-black"/>, SkillType.Software),
  "CPlusPlus": new Skill("C++", <CplusplusPlain size="26" className="*:fill-black"/>, SkillType.Language),
  "JavaScript": new Skill("JavaScript", <JavascriptPlain size="26" className="*:fill-black" />, SkillType.Language),
  "React": new Skill("React", <ReactOriginal size="26" className="*:fill-black"/>, SkillType.Framework),
  "HTML": new Skill("HTML", <Html5Plain size="26" className="*:fill-black"/>, SkillType.NonScriptLang),
  "CSS": new Skill("CSS", <Css3Plain size="26" className="*:fill-black"/>, SkillType.NonScriptLang),
  "Java": new Skill("Java", <JavaPlain size="26" className="*:fill-black"/>, SkillType.Language),
  "TypeScript": new Skill("TypeScript", <TypescriptPlain size="26" className="*:fill-black"/>, SkillType.Language),
  "Godot": new Skill("Godot", <GodotPlain size="26" className="*:fill-black"/>, SkillType.Software),
  "Tailwind": new Skill("Tailwind", <TailwindcssOriginal size="26" className="*:fill-black"/>, SkillType.Library),
  "Python": new Skill("Python", <PythonPlain size="26" className="*:fill-black"/>, SkillType.Language),
  "Blender": new Skill("Blender", <BlenderOriginal size="26" className="*:fill-black"/>, SkillType.Software),
  "Maya": new Skill("Maya", <MayaPlain size="26" className="*:fill-black"/>, SkillType.Software),
  "SFML": new Skill("SFML", <div />, SkillType.Library),
  "Box2D": new Skill("Box2D", <div />, SkillType.Library),
  "PixiJS": new Skill("PixiJS", <div />, SkillType.Library),
  "Monogame": new Skill("Monogame", <div />, SkillType.Library),
  "GameDesign": new Skill("Game Design", <div />, SkillType.Library),
};
