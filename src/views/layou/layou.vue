<template>
    <div class="layou">
        <div class="layou_left">
            <!-- 标题 -->
            <div class="layou_title" :inverted="inverted" @click="collapsed = !collapsed"
                :class="[collapsed ? 'layou_title_active' : 'layou_title_actives']">
                {{ collapsed?'助手': '网站聚合助手' }}
            </div>
            <!-- 菜单 -->
            <n-layout has-sider>
                <n-layout-sider :inverted="inverted" collapse-mode="width" :collapsed-width="collapsedWidth"
                    :width="menuWidth" :collapsed="collapsed" @collapse="collapsed = true" @expand="collapsed = false">
                    <n-menu :collapsed="collapsed" :inverted="inverted" :accordion="true"
                        :collapsed-width="collapsedWidth" :collapsed-icon-size="22" :options="menuOptions" />
                </n-layout-sider>
            </n-layout>
        </div>

        <div class="layou_right">
            <div class="layou_header">
                2
            </div>
            <div class="layou_content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { h, ref, Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
    BookOutline as BookIcon,
    PersonOutline as PersonIcon,
    WineOutline as WineIcon
} from '@vicons/ionicons5'

// 主题
let inverted = ref(true)
// 菜单折叠宽度
let collapsedWidth = ref(64)
// 菜单是否折叠
let collapsed = ref(false)
// 菜单宽度
let menuWidth = ref(240)


const renderIcon = (icon: Component) => {
    return () => h(NIcon, null, { default: () => h(icon) })
}
let menuOptions: any = [
    {
        label: '且听风吟',
        key: 'hear-the-wind-sing',
        icon: renderIcon(BookIcon),
        children: [
            {
                label: '鼠',
                key: 'rat'
            }
        ]
    },
    {
        label: '1973年的弹珠玩具',
        key: 'pinball-1973',
        icon: renderIcon(PersonIcon),
        children: [
            {
                label: '鼠',
                key: 'rat'
            }
        ]
    },
    {
        label: '寻羊冒险记',
        key: 'a-wild-sheep-chase',
        disabled: true,
        icon: renderIcon(WineIcon)
    },
    {
        label: '舞，舞，舞',
        key: 'dance-dance-dance',
        icon: renderIcon(BookIcon),
        children: [
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            },
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            },
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            },
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            },
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            },
            {
                type: 'group',
                label: '人物',
                key: 'people',
                children: [
                    {
                        label: '叙事者',
                        key: 'narrator',
                        icon: renderIcon(PersonIcon)
                    },
                    {
                        label: '羊男',
                        key: 'sheep-man',
                        icon: renderIcon(PersonIcon)
                    }
                ]
            },
            {
                label: '饮品',
                key: 'beverage',
                icon: renderIcon(WineIcon),
                children: [
                    {
                        label: '威士忌',
                        key: 'whisky'
                    }
                ]
            },
            {
                label: '食物',
                key: 'food',
                children: [
                    {
                        label: '三明治',
                        key: 'sandwich'
                    }
                ]
            },
            {
                label: '过去增多，未来减少',
                key: 'the-past-increases-the-future-recedes'
            }
        ]
    }
]
</script>
<style scoped lang="scss">
.layou {
    height: 100vh;
    width: 100%;
    display: flex;

    // 菜单部分样式
    .layou_left {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    /*滚动条样式*/
    :deep(.n-layout-sider-scroll-container) {
        overflow-x: hidden;
        overflow-y: auto;
        color: #000;
        font-size: .7rem;
        font-family: "\5FAE\8F6F\96C5\9ED1", Helvetica, "黑体", Arial, Tahoma;
        height: 100%;
    }

    :deep(.n-layout-sider-scroll-container::-webkit-scrollbar) {
        width: 4px;
        /*height: 4px;*/
    }

    :deep(.n-layout-sider-scroll-container::-webkit-scrollbar-thumb) {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(0, 0, 0, 0.2);
    }

    :deep(.n-layout-sider-scroll-container::-webkit-scrollbar-track) {
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 0;
        background: #FFFFFF;
    }

    .layou_title {
        height: 50px;
        // width: 240px;
        font-size: 16px;
        text-align: center;
        line-height: 50px;
        color: #FFFFFF;
        background-color: #001428;
        cursor: pointer;
        overflow: hidden;
    }

    .layou_title_active {
        animation: opacity collWidth 0.3s;
    }

    .layou_title_actives {
        animation: opacity collWidthActive 0.3s;
    }

    // 动画
    @keyframes collWidth {
        from {
            width: 240px;
        }

        to {
            width: 64px;
        }
    }

    @keyframes collWidthActive {
        from {
            width: 64px;
        }

        to {
            width: 240px;
        }
    }

    // 右侧样式
    .layou_right {
        width: calc(100% - 240px);

        // 顶部样式
        .layou_header {
            height: 50px;
            border: 1px solid yellow;
        }

        .layou_content {}
    }


}
</style>