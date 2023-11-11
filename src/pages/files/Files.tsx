import { useTitle } from 'react-use';
import { files, statics } from '../../data/files and statics';
import { DownloadIcon } from '../../components/Icons';
import Title from '../../components/title/Title';
import Button from '../../components/ui/button/Button';
import './files.scss';

function Files() {
  useTitle('Files | Dashboard');

  return (
    <div className="files">
      <Title title="Files" />
      <div className="files-content">
        <section className="section-files-items">
          {files.map(({ fileName, size, date, Icon }, index) => (
            <article className="file-item" key={index}>
              <div className="main-info">
                <Icon className="file-icon" />
                <span className="file-name">{fileName}</span>
              </div>
              <div className="details-info">
                <span>{date}</span>
                <span>{size}</span>
              </div>
              <Button
                className="download-button"
                variant="ghost"
                size="icon"
                aria-label="Download file"
              >
                <DownloadIcon />
              </Button>
            </article>
          ))}
        </section>
        <section className="section-statics">
          <h2 className="section-title">Files statistics</h2>
          <div className="statics-items">
            {statics.map(({ type, size, number, Icon }, index) => (
              <div className="statics-item" key={index}>
                <Icon className="statics-icon" />
                <div className="main-info">
                  <span className="files-type">{type} files</span>
                  <span className="files-number">{number} files</span>
                </div>
                <div className="files-size">{size}</div>
              </div>
            ))}
          </div>
          <Button className="upload-button">Upload</Button>
        </section>
      </div>
    </div>
  );
}

export default Files;
