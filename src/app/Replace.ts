export class Replace {
    static format(entity, needle, replacement, affectsKeys, affectsValues) {
        affectsKeys = typeof affectsKeys === "undefined" ? true : affectsKeys;
        affectsValues = typeof affectsValues === "undefined" ? true : affectsValues;
        var newEntity = {}, regExp = new RegExp(needle, 'g');
        for (var property in entity) {
            if (!entity.hasOwnProperty(property)) {
                continue;
            }
            var value = entity[property], newProperty = property;
            if (affectsKeys) {
                newProperty = property.replace(regExp, replacement);
            }
            if (affectsValues) {
                if (typeof value === "object") {
                    value = Replace.format(value, needle, replacement, affectsKeys, affectsValues);
                }
                else if (typeof value === "string") {
                    value = value.replace(regExp, replacement);
                }
            }
            newEntity[newProperty] = value;
        }
        return newEntity;
    }
}