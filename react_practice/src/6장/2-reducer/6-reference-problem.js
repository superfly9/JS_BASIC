import prduce, { produce } from 'immer';
function reducer (state={},action) {
    return produce(state,draft=>{
        switch (action.type) {
            case SET_SELECTED_PEOPLE:
                //이거 대신 draft.selectedPeople = draft.peopleList.find(people=>people.id === action.id)
                //객체 수정시 reference 대신 id를 저장해서 나중에 사용하면 reference가 달라서 수정이 안되는 문제를 방지할 수 있다
                draft.selectedPeople = action.id
                break;
            case EDIT_PEOPLE_NAME:
                const people = draft.peopleList.find(item=>item.id === action.id);
                people.name = action.name;
                break; 
        }
    })
}