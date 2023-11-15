import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { initialContent } from './initialContent'
import { lowlight } from 'lowlight/lib/core'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)

const Editor = () => {

  const editor = useEditor({
    extensions: [StarterKit, CodeBlockLowlight.configure({
      lowlight,
    })],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none'
      }
    }
  })

  return (<EditorContent className="max-w-[700px] mx-auto pt-16 prose" editor={editor} />)


}

export default Editor