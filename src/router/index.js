import EquipmentList from "../pages/equipment-list/equipment-list";
import EquipmentDetail from "../pages/equipment-detail/equipment-detail";
import EquipmentCreation from "../pages/equipment-creation/equipment-creation";

const routers = [
    {
        path:'/',
        component:EquipmentList,
        children:[
            {
                path:'/:equipmentId',
                component:EquipmentDetail
            },
        ]
    },
    {
        path:'/create',
        component:EquipmentCreation
    }
]
export default routers

