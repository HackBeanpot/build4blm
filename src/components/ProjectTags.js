import React from 'react'

const ProjectTags = ({ tags, isUrgent, needsPM, selectedStatus={} }) => (
  <>
    {isUrgent &&
      <span
        className={`project-tag project-tag-urgent ${selectedStatus['Urgent'] ? 'project-tag-urgent-selected' : ''}`}
      >
        Urgent
      </span>
    }
    <div>
      {tags.map(tag => (
        <span key={tag} className={`project-tag ${selectedStatus[tag] ? 'project-tag-selected' : ''}`}>{tag}</span>
      ))}
      {needsPM &&
       <span
        className={`project-tag ${selectedStatus['PM'] ? 'project-tag-selected' : ''}`}>
          PM
        </span>
      }
    </div>
  </>
)

export default ProjectTags