import { GraphQLScalarType, Kind } from 'graphql';
import { brands } from "./db"

const Types = ["shoes", "clothes", "bags", "hats", "accessories"]

const resolvers = {
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    parseValue(value) {
      return new Date(value)
    },
    serialize(value) {
      return value.getTime()
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT)
        return new Date(parseInt(ast.value, 10))
      return null
    }
  }),
  Query: {
    brand: (parent, { name }, context, info) => {
      return brands.find(brand => brand.name === name)
    },
    brands: (parent, args, context, info) => {
      return brands
    }
  },
  Mutation: {
    createBrand: (parent, { name, createdAt, type, country, description }, context, info) => {
      if (type.length === 0) throw new Error("Type should not be empty.")
      if (type.filter(e => !Types.includes(e)).length != 0) throw new Error(`Type should only contain at least one of those values: [${Types.join(', ')}]`)
      const newBrand = { name, createdAt, type, country, description }

      brands.push(newBrand)
      return newBrand
    },
    updateBrand: (parent, { name, createdAt, type, country, description }, context, info) => {
      if (type.length === 0) throw new Error("Type should not be empty.")
      if (type.filter(e => !Types.includes(e)).length != 0) throw new Error(`Type should only contain at least one of those values: [${Types.join(', ')}]`)
      const brand = users.find(brand => brand.name === name)

      brand.name = name
      brand.createdAt = createdAt
      brand.type = type
      brand.country = country
      brand.description = description

      return brand
    },
    deleteBrand: (parent, { name }, context, info) => {
      const brandIndex = brands.findIndex(brand => brand.name === name)

      if (brandIndex === -1) throw new Error("Brand not found.")
      const deletedUsers = users.splice(userIndex, 1)
      return deletedUsers[0]
    }
  }
}

export default resolvers