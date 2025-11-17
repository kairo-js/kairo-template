/**
 * scripts/properties から manifest.jsonを自動生成する
 * propertiesは、アドオン間通信においても、識別などに利用する
 */
/**
 * 文末に # が記述されている箇所を適宜修正して使用します。
 * Modify and use where # is written at the end of the sentence as appropriate
 */
export const properties = {
    id: "kairo-template", : // a-z & 0-9 - _
    metadata
}, { 
/** 製作者の名前 */
authors: [] }, header, resourcepack, modules, dependencies, 
/** 前提アドオン */
requiredAddons, tags;
/**
 * "official" を非公式に付与することは許可されていません。
 * 公認のアドオンには "approved" を付与します。
 * It is not allowed to assign "official" unofficially.
 * For approved addons, assign "approved".
 *
 */
export const supportedTags = [
    "official",
    "approved",
    "stable",
    "experimental"
];
