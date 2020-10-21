
import { Scalar, CustomScalar  } from '@nestjs/graphql';
import { FileUpload } from 'graphql-upload'
import { ValueNode } from 'graphql';
import { BadRequestException } from '@nestjs/common'
import { GraphQLUpload } from "apollo-server-express";


export type ImageProps = Promise<FileUpload>


@Scalar('Image')
export class Image implements CustomScalar<ImageProps, ImageProps>{
  description = 'Upload custom scalar type';
  supportedFormats = ['image/jpg','image/jpeg','image/png']

  async parseValue(value) {
   const {filename, mimetype} = await value;
    if (!this.supportedFormats.includes(mimetype))
      throw new BadRequestException(
        `Unsupported file format. Supports: ${this.supportedFormats.join(' ')}.`
      )
    return value;
  }

  serialize(value: any) {
    return GraphQLUpload.serialize(value);
  }

  parseLiteral(ast) {
    return GraphQLUpload.parseLiteral(ast, ast.value);
  }
}