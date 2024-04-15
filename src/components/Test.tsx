import { NIcon } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon,
} from '@vicons/ionicons5'
import { NMenu } from 'naive-ui'
export const testProps = {
  title: String,
  type: {
    type: String as PropType<
      'info' | 'warning' | 'error' | 'success' | 'default'
    >,
    default: 'default',
  },
  bordered: {
    type: Boolean,
    default: true,
  },
  closable: Boolean,
  onClose: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onAfterHide: Function,
}
const menuOptions: MenuOption[] = [
  {
    label: '鱼',
    key: 'fish',
    icon: renderIcon(FishIcon),
    children: [
      {
        label: '红烧',
        key: 'braise',
        children: [
          {
            label: '加辣',
            key: 'spicy',
          },
        ],
      },
      {
        label: '清蒸',
        key: 'steamed',
        children: [
          {
            label: '不要葱',
            key: 'no-green-onion',
          },
        ],
      },
    ],
  },
  {
    label: '熊掌',
    key: 'bear-paw',
    icon: renderIcon(PawIcon),
    children: [
      {
        label: '保护野生动物',
        key: 'protect-wild-animals',
      },
    ],
  },
  {
    label: '两个都要',
    key: 'both',
    icon: renderIcon(BagOutlineIcon),
    children: [
      {
        label: '鱼和熊掌不可兼得',
        key: 'can-not',
      },
    ],
  },
]
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}
export default defineComponent({
  name: 'Test',
  inheritAttrs: false,
  props: testProps,
  setup(props, ctx) {
    const info = () => {
      console.log(props)
      console.log(ctx)
    }
    return {
      info,
    }
  },
  render() {
    return (
      <div>
        {/* header */}
        <div class={`px-8 w-full bg-white h-16`}>header</div>
        <div class={`flex`}>
          {/* aside */}
          <div class={`w-64 bg-white h-screen`}>
            <NMenu
              options={menuOptions}
              default-expanded-keys="defaultExpandedKeys"
              accordion
            ></NMenu>
          </div>
          {/* main */}
          <div>main</div>
        </div>
      </div>
    )
  },
})
