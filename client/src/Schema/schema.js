export const Schema = {
    getBrands: () => "query{brands{id name createdAt type country description}}",
    deleteBrand: (id) => `mutation{deleteBrand(id: ${id}) {id}}`,
    addBrand: (name, createdAt, type, country, description) => `mutation{createBrand(name: ${name}, createdAt: ${createdAt}, country: ${country}, type: ${type}, description: ${description}) {id, name, country, type, createdAt, description}}`
}