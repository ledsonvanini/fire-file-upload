import React from 'react'
import TecList from './tecList'

export default function Sobre() {
  return (
    <div className='flex flex-col'>
      <div className="flex flex-col p-8 gap-2 my-2 m-auto ">
        <h1 className='text-3xl'>Créditos</h1>
        <div className="flex gap-4">
          <strong>Tema:</strong>
          <span>Firefile - Sistema de Upload de Arquivos </span>
          <hr />
        </div>
        <div className="flex gap-4">
          <strong>Aluno:</strong>
          <span>Ledson José Vanini</span>
        </div>
        <div className="flex gap-4">
          <strong>Curso:</strong>
          <span>3º Ti - Técnico em Informática Sub ETIC</span>
        </div>
        <div className="flex gap-4">
          <strong>Instituição:</strong>
          <span>Colégio Estadual do Paraná - CEP</span>
          <strong>Ano:</strong>
          <span>2024</span>
        </div>
        <div className="flex gap-4">
          <strong>Orientação:</strong>
          <span>Fernando E. P. Maia</span>
          <span>|</span>
          <span>Valdecir B. Rego</span>
        </div>
      </div>
      <div className="flex justify-center text-center w-full p-10 border-t">
        <div className="flex flex-col max-w-xl w-full">
          <h3 className='text-left p-3 text-xl font-semibold'>
            Tecnologias Usadas
          </h3>
          <TecList />
        </div>
      </div>
    </div>
  )
}
