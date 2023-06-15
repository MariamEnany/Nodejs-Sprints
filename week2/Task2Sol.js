// const getData = async () => {
//       try {
//         const res = await fetch(
//           "https://api.escuelajs.co/api/v1/products", {
//             method: 'GET',
//             body: JSON.stringify({}),
//             headers:{
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//           }
//         ).then((res) => {
//             console.log("balabizo")
//             res.json();
//             console.log(res.json())
//         });
//       } catch (error) {}
//     };

//     getData();

    async function getUsers() {
        let url = 'https://api.escuelajs.co/api/v1/products';
        console.log("1")
        try {
            let res = await fetch(url);
            //console.log(await res.json());
            let result = await res.json();
            let category=[];
            let category2=[];
            result.forEach(element=>{
                if (!category.includes(element.category.id)){
                    category.push(element.category.id)
                    category2.push({"category":{id:element.category.id,name:element.category.name},"products":[]})
                }
            
            })
            result.forEach(element=>{
                console.log(element)
                for(let i=0;i<category2.length;i++){
                    if(category2[i].category.id==element.category.id){
                        category2[i].products.push(element)
                    }
                }
            })
            console.log(category2)
            
            
        } catch (error) {
            console.log(error);

        }
    }

    getUsers();