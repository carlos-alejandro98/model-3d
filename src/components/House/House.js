import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function House({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/house.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.rocks_roof_up__stone_decails_0.geometry}
            material={nodes.rocks_roof_up__stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_1_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_1_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_2_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_2_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_3_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_3_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_4_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_4_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_5_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_5_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_6_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_6_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_7_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_7_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_8_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_8_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_9_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_9_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_10_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_10_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_11_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_11_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_12_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_12_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_13_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_13_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_14_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_14_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_15_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_15_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_16_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_16_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_17_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_17_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_18_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_18_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_19_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_19_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_20_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_20_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_21_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_21_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_22_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_22_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_23_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_23_stone_decails_0.material}
          />
          <mesh
            geometry={nodes.rocks_roof_up_24_stone_decails_0.geometry}
            material={nodes.rocks_roof_up_24_stone_decails_0.material}
          />
          <mesh geometry={nodes.chimney_up_metal_0.geometry} material={nodes.chimney_up_metal_0.material} />
          <mesh geometry={nodes.chimney_up_metal_dop_0.geometry} material={nodes.chimney_up_metal_dop_0.material} />
          <mesh
            geometry={nodes.chimney_holders_2_stone2_0.geometry}
            material={nodes.chimney_holders_2_stone2_0.material}
          />
          <mesh
            geometry={nodes.chimney_holders_3_stone2_0.geometry}
            material={nodes.chimney_holders_3_stone2_0.material}
          />
          <mesh
            geometry={nodes.chimney_holders__stone2_0.geometry}
            material={nodes.chimney_holders__stone2_0.material}
          />
          <mesh
            geometry={nodes.chimney_holders_1_stone2_0.geometry}
            material={nodes.chimney_holders_1_stone2_0.material}
          />
          <mesh
            geometry={nodes.chimney_decail_stone_decails_0.geometry}
            material={nodes.chimney_decail_stone_decails_0.material}
          />
          <mesh geometry={nodes.chimney_2_metal_0.geometry} material={nodes.chimney_2_metal_0.material} />
          <mesh geometry={nodes.chimney_2_stone_0.geometry} material={nodes.chimney_2_stone_0.material} />
          <mesh
            geometry={nodes.chimney_2_metal_decail_up_0.geometry}
            material={nodes.chimney_2_metal_decail_up_0.material}
          />
          <mesh geometry={nodes.beam_1_wood_base_0.geometry} material={nodes.beam_1_wood_base_0.material} />
          <mesh geometry={nodes.beam_2_wood_base_0.geometry} material={nodes.beam_2_wood_base_0.material} />
          <mesh geometry={nodes.beam_3_holders_wood_up_0.geometry} material={nodes.beam_3_holders_wood_up_0.material} />
          <mesh geometry={nodes.beam_4_holders_wood_up_0.geometry} material={nodes.beam_4_holders_wood_up_0.material} />
          <mesh geometry={nodes.beam_5_wood_base_0.geometry} material={nodes.beam_5_wood_base_0.material} />
          <mesh geometry={nodes.beam_6_holders_wood_up_0.geometry} material={nodes.beam_6_holders_wood_up_0.material} />
          <mesh geometry={nodes.beam_8_wood_base_0.geometry} material={nodes.beam_8_wood_base_0.material} />
          <mesh geometry={nodes.beam_9_wood_base_0.geometry} material={nodes.beam_9_wood_base_0.material} />
          <mesh geometry={nodes.beam_10_wood_base_0.geometry} material={nodes.beam_10_wood_base_0.material} />
          <mesh geometry={nodes.beam_11_wood_base_0.geometry} material={nodes.beam_11_wood_base_0.material} />
          <mesh geometry={nodes.beam_13_wood_base_0.geometry} material={nodes.beam_13_wood_base_0.material} />
          <mesh geometry={nodes.roof_holder1_wood_base_0.geometry} material={nodes.roof_holder1_wood_base_0.material} />
          <mesh geometry={nodes.beam_15_wood_base_0.geometry} material={nodes.beam_15_wood_base_0.material} />
          <mesh geometry={nodes.beam_12_wood_base_0.geometry} material={nodes.beam_12_wood_base_0.material} />
          <mesh
            geometry={nodes.roof_holdeer_holders_wood_up_0.geometry}
            material={nodes.roof_holdeer_holders_wood_up_0.material}
          />
          <mesh geometry={nodes.roof_holdeer_wood_base_0.geometry} material={nodes.roof_holdeer_wood_base_0.material} />
          <mesh geometry={nodes.roof_decail2_metal_0.geometry} material={nodes.roof_decail2_metal_0.material} />
          <mesh geometry={nodes.roof_decail_metal_0.geometry} material={nodes.roof_decail_metal_0.material} />
          <mesh geometry={nodes.roof_decail_metal_dop_0.geometry} material={nodes.roof_decail_metal_dop_0.material} />
          <mesh
            geometry={nodes.roof_decail_metal_decail_up_0.geometry}
            material={nodes.roof_decail_metal_decail_up_0.material}
          />
          <mesh geometry={nodes.roofs_rocks_up_roof_up_0.geometry} material={materials.roof_up} />
          <mesh geometry={nodes.roof_tile4_roof1_0.geometry} material={nodes.roof_tile4_roof1_0.material} />
          <mesh geometry={nodes.roof_tile_3_roof1_0.geometry} material={nodes.roof_tile_3_roof1_0.material} />
          <mesh geometry={nodes.roof_tile_2_roof1_0.geometry} material={nodes.roof_tile_2_roof1_0.material} />
          <mesh geometry={nodes.roof_tile_1_roof1_0.geometry} material={nodes.roof_tile_1_roof1_0.material} />
          <mesh geometry={nodes.roof_tile__roof1_0.geometry} material={nodes.roof_tile__roof1_0.material} />
          <mesh geometry={nodes.window_6_window_middle_0.geometry} material={nodes.window_6_window_middle_0.material} />
          <mesh
            geometry={nodes.window_6_window_middle2_0.geometry}
            material={nodes.window_6_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_6_glass_window_0.geometry} material={nodes.window_6_glass_window_0.material} />
          <mesh geometry={nodes.window_6_window_base_0.geometry} material={nodes.window_6_window_base_0.material} />
          <mesh
            geometry={nodes.window_5_window_middle2_0.geometry}
            material={nodes.window_5_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_5_window_middle_0.geometry} material={nodes.window_5_window_middle_0.material} />
          <mesh geometry={nodes.window_5_glass_window_0.geometry} material={nodes.window_5_glass_window_0.material} />
          <mesh geometry={nodes.window_5_window_base_0.geometry} material={nodes.window_5_window_base_0.material} />
          <mesh geometry={nodes.window_3_window_middle_0.geometry} material={nodes.window_3_window_middle_0.material} />
          <mesh
            geometry={nodes.window_3_window_middle2_0.geometry}
            material={nodes.window_3_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_3_window_base_0.geometry} material={nodes.window_3_window_base_0.material} />
          <mesh geometry={nodes.window_3_glass_window_0.geometry} material={nodes.window_3_glass_window_0.material} />
          <mesh geometry={nodes.window_2_window_base_0.geometry} material={nodes.window_2_window_base_0.material} />
          <mesh geometry={nodes.window_2_glass_window_0.geometry} material={nodes.window_2_glass_window_0.material} />
          <mesh
            geometry={nodes.window_2_window_middle2_0.geometry}
            material={nodes.window_2_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_2_window_middle_0.geometry} material={nodes.window_2_window_middle_0.material} />
          <mesh geometry={nodes.window_1_window_base_0.geometry} material={nodes.window_1_window_base_0.material} />
          <mesh geometry={nodes.window_1_glass_window_0.geometry} material={nodes.window_1_glass_window_0.material} />
          <mesh geometry={nodes.window_1_window_middle_0.geometry} material={nodes.window_1_window_middle_0.material} />
          <mesh
            geometry={nodes.window_1_window_middle2_0.geometry}
            material={nodes.window_1_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_4_window_middle_0.geometry} material={nodes.window_4_window_middle_0.material} />
          <mesh geometry={nodes.window_4_glass_window_0.geometry} material={nodes.window_4_glass_window_0.material} />
          <mesh geometry={nodes.window_4_window_base_0.geometry} material={nodes.window_4_window_base_0.material} />
          <mesh
            geometry={nodes.window_4_window_middle2_0.geometry}
            material={nodes.window_4_window_middle2_0.material}
          />
          <mesh geometry={nodes.window_albedo_0.geometry} material={nodes.window_albedo_0.material} />
          <mesh geometry={nodes.window_glass_window_0.geometry} material={nodes.window_glass_window_0.material} />
          <mesh geometry={nodes.window_window_base_0.geometry} material={nodes.window_window_base_0.material} />
          <mesh geometry={nodes.window_holders_wood_up_0.geometry} material={nodes.window_holders_wood_up_0.material} />
          <mesh
            geometry={nodes.holders_base_wood_middle_0.geometry}
            material={nodes.holders_base_wood_middle_0.material}
          />
          <mesh
            geometry={nodes.holder_base_1_wood_base_0.geometry}
            material={nodes.holder_base_1_wood_base_0.material}
          />
          <mesh
            geometry={nodes.holder_base_2_wood_base_0.geometry}
            material={nodes.holder_base_2_wood_base_0.material}
          />
          <mesh geometry={nodes.holder_base_3_wood_base2_0.geometry} material={materials.wood_base2} />
          <mesh geometry={nodes.column_up_wood_base_0.geometry} material={nodes.column_up_wood_base_0.material} />
          <mesh geometry={nodes.column_under_wood_base_0.geometry} material={nodes.column_under_wood_base_0.material} />
          <mesh
            geometry={nodes.column_wood_holders_down_0.geometry}
            material={nodes.column_wood_holders_down_0.material}
          />
          <mesh geometry={nodes.holders_2_wood_middle_0.geometry} material={nodes.holders_2_wood_middle_0.material} />
          <mesh geometry={nodes.holder_wood_base_0.geometry} material={nodes.holder_wood_base_0.material} />
          <mesh
            geometry={nodes.column_up1_wood_holders_down_0.geometry}
            material={nodes.column_up1_wood_holders_down_0.material}
          />
          <mesh geometry={nodes.columns_up_wood_base_0.geometry} material={nodes.columns_up_wood_base_0.material} />
          <mesh
            geometry={nodes.holders_3_holders_wood_up_0.geometry}
            material={nodes.holders_3_holders_wood_up_0.material}
          />
          <mesh
            geometry={nodes.holders_4_wood_holders_down_0.geometry}
            material={nodes.holders_4_wood_holders_down_0.material}
          />
          <mesh
            geometry={nodes.holder_up_right2_wood_base_0.geometry}
            material={nodes.holder_up_right2_wood_base_0.material}
          />
          <mesh
            geometry={nodes.holder_up_right1_wood_base_0.geometry}
            material={nodes.holder_up_right1_wood_base_0.material}
          />
          <mesh geometry={nodes.door_1_albedo_0.geometry} material={nodes.door_1_albedo_0.material} />
          <mesh geometry={nodes.door_2_albedo_0.geometry} material={nodes.door_2_albedo_0.material} />
          <mesh geometry={nodes.nails_metal_dop_0.geometry} material={nodes.nails_metal_dop_0.material} />
          <mesh geometry={nodes.nails_metal_0.geometry} material={nodes.nails_metal_0.material} />
          <mesh geometry={nodes.rocks_down_lambert17_0.geometry} material={materials.lambert17} />
          <mesh
            geometry={nodes.rocks_door_stone_decails_0.geometry}
            material={nodes.rocks_door_stone_decails_0.material}
          />
          <mesh geometry={nodes.boxes_barrel16_0.geometry} material={nodes.boxes_barrel16_0.material} />
          <mesh geometry={nodes.boxes_boxes211_0.geometry} material={materials.boxes211} />
          <mesh geometry={nodes.barrel_barrel16_0.geometry} material={nodes.barrel_barrel16_0.material} />
          <mesh geometry={nodes.barrel_metal_0.geometry} material={nodes.barrel_metal_0.material} />
          <mesh geometry={nodes.barrel_metal_dop_0.geometry} material={nodes.barrel_metal_dop_0.material} />
          <mesh
            geometry={nodes.rocks_walls_down_stone_decails_0.geometry}
            material={nodes.rocks_walls_down_stone_decails_0.material}
          />
          <mesh geometry={nodes.nameplate_2_metal_dop_0.geometry} material={nodes.nameplate_2_metal_dop_0.material} />
          <mesh geometry={nodes.nameplate_2_metal_0.geometry} material={nodes.nameplate_2_metal_0.material} />
          <mesh
            geometry={nodes.nameplate_2_metal_decail_up_0.geometry}
            material={nodes.nameplate_2_metal_decail_up_0.material}
          />
          <mesh geometry={nodes.rocks_up_stone_0.geometry} material={nodes.rocks_up_stone_0.material} />
          <mesh geometry={nodes.nameplate_photo4_0.geometry} material={nodes.nameplate_photo4_0.material} />
          <mesh geometry={nodes.nameplate_photo2_0.geometry} material={materials.photo2} />
          <mesh geometry={nodes.nameplate_photo1_0.geometry} material={materials.photo1} />
          <mesh geometry={nodes.nameplate_albedo_0.geometry} material={nodes.nameplate_albedo_0.material} />
          <mesh geometry={nodes.nameplate_metal_0.geometry} material={nodes.nameplate_metal_0.material} />
          <mesh geometry={nodes.wanted_photo4_0.geometry} material={nodes.wanted_photo4_0.material} />
          <mesh geometry={nodes.wanted_albedo_0.geometry} material={nodes.wanted_albedo_0.material} />
          <mesh geometry={nodes.wanted_metal_0.geometry} material={nodes.wanted_metal_0.material} />
          <mesh geometry={nodes.base_under_grass_base_0.geometry} material={materials.grass_base} />
          <mesh geometry={nodes.base_under_stone_down_0.geometry} material={materials.stone_down} />
          <mesh geometry={nodes.base_under_albedo_0.geometry} material={nodes.base_under_albedo_0.material} />
          <mesh geometry={nodes.base_albedo_0.geometry} material={nodes.base_albedo_0.material} />
          <mesh geometry={nodes.base_roof1_0.geometry} material={nodes.base_roof1_0.material} />
          <mesh geometry={nodes.base_stone_0.geometry} material={nodes.base_stone_0.material} />
          <mesh geometry={nodes.base_2_albedo_0.geometry} material={nodes.base_2_albedo_0.material} />
          <mesh geometry={nodes.base_2_roof1_0.geometry} material={nodes.base_2_roof1_0.material} />
          <mesh geometry={nodes.base_3_roof1_0.geometry} material={nodes.base_3_roof1_0.material} />
          <mesh geometry={nodes.base_3_albedo_0.geometry} material={nodes.base_3_albedo_0.material} />
          <mesh geometry={nodes.base_chimney_stone_0.geometry} material={nodes.base_chimney_stone_0.material} />
          <mesh geometry={nodes.base_4_albedo_0.geometry} material={nodes.base_4_albedo_0.material} />
          <mesh geometry={nodes.grass1_grass_0.geometry} material={nodes.grass1_grass_0.material} />
          <mesh geometry={nodes.grass1_grass_0_1.geometry} material={nodes.grass1_grass_0_1.material} />
          <mesh geometry={nodes.grass1_grass_0_2.geometry} material={nodes.grass1_grass_0_2.material} />
          <mesh geometry={nodes.grass1_grass_0_3.geometry} material={nodes.grass1_grass_0_3.material} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/house.gltf')
