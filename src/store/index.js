import { createStore } from 'vuex'

export default createStore({
  state: {
    notes: [] 
  },
  mutations: {
      fetchNotes(state, notes){
          state.notes=notes
      }
    //   deleteMember(state,id){
    //     state.members= state.members.filter(x=> x.id !=id)
    //   },
    //   addMember(state, newMember){
        
    //     state.members.push(newMember)
    //   },
    //   updateMember(state,updatedMember){
    //     let objIndex = state.members.findIndex((obj => obj.id == updatedMember.id))
    //     state.members[objIndex]=updatedMember
    //   },
    //   deleteTour(state,id){
    //     state.tours= state.tours.filter(x=> x.id !=id)
    //   },
    //   addTour(state, newTour){
        
         
    //     state.tours.push(newTour)
    //   },
    //   fetchMembers(state,members){
    //     state.members=members
    //   },
    //   fetchTours(state,tours){
    //     state.tours=tours
    //   }
  },
  actions: {
    
  },
  modules: {
  }
})