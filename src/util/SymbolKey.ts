// export const DarkKey = Symbol() as InjectionKey<Ref<boolean>>
//考虑Symbol注册表
export const DarkKey = Symbol.for('DarkKey') as InjectionKey<Ref<boolean>>
